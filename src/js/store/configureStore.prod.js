import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import rootReducer from "../reducers";


const configureStore = ( preloadedState, history ) => {
    const middlewares = [ routerMiddleware( history ) ];

    const enhancers = [
        applyMiddleware( ...middlewares ),
    ];

    const store = createStore( rootReducer, preloadedState, compose( ...enhancers ) );
    return store;
};

export default configureStore;
