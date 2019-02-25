// Core
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from "history";

// Middleware
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { customThunk } from './custom';
import createSagaMiddleware from 'redux-saga';

const history =   createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, customThunk, routerMiddleware];

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware, history };
