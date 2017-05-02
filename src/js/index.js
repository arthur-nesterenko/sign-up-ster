import React from 'react';
import { render } from 'react-dom';
import configureStore from "./store";
import Routing from './routes';
import createBrowserHistory from 'history/createBrowserHistory';





const renderToDomElement = document.getElementById( 'app' );

const history = createBrowserHistory();
const store   = configureStore( {}, history );



render(
<Routing history={history} store={store}/>, renderToDomElement );