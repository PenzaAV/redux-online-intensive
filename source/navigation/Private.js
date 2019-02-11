// Core
import React, { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

// Pages
import { Feed, Profile, NewPassword } from '../pages';
import {book} from "./book";

export default class Private extends Component {
    render () {
            return (
            <Switch>
                <Route path = { book.profile } component = { Profile }/>
                <Route path = { book.newPassword } component = { NewPassword }/>
                <Route path = { book.feed } component = { Feed }/>
                <Redirect to = { book.feed }/>
            </Switch>
        );
    }
}
