// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Routes
import Private from './Private'
import Public from './Public'
import { authActions } from "../bus/auth/actions";
import { socketActions } from "../bus/socket/actions";
// Components
import { Loading } from '../components';
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized:   state.auth.get('isInitialized'),
    }
};

// WebSocket
import { joinSocketChannel } from "../init/socket";

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
};

@hot(module)
@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class App extends Component {
    componentDidMount() {
        this.props.initializeAsync();
        joinSocketChannel();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if(!isInitialized){
            return <Loading/>;
        }
        return isAuthenticated ? <Private/> : <Public/>
    }
}
