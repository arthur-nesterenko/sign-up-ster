import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers( {
    form   : formReducer,
    routing: routerReducer
} );

export default rootReducer;
