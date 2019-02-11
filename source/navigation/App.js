// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from "react-redux";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated')
    }
};

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';
import {book} from "./book";

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;
            return isAuthenticated ? (
            <Switch>
                <Route path = { book.profile } component = { Profile }/>
                <Route path = { book.newPassword } component = { NewPassword }/>
                <Route path = { book.feed } component = { Feed }/>
                <Redirect to = { book.feed }/>
            </Switch>
        ):(
            <Switch>
                <Route path = { book.login } component = { Login }/>
                <Route path = { book.signUp } component = { Signup }/>
                <Redirect to = { book.login }/>
            </Switch>
        );
    }
}
