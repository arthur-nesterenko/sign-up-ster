import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from "../reducers";

const devtools = window.devToolsExtension || (() => ( noop ) => noop);

const logger = createLogger( {
    predicate: ( getState, action ) => !action.type.includes( '@@redux-form/' )
} );

const configureStore = ( preloadedState, history ) => {
    const middlewares = [ routerMiddleware( history ), logger ];

    const enhancers = [
        applyMiddleware( ...middlewares ),
        devtools()
    ];

    const store = createStore( rootReducer, preloadedState, compose( ...enhancers ) );
    return store;
};

export default configureStore;
