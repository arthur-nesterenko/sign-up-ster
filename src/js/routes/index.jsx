/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Route,Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import SignUp from '../containers/Signup';


const Routing = ( { store, history } ) => (
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <Route render={( { location } ) => (
                      <div>
                          <Route exact path="/" render={() => (
                          <Redirect to="/first-step"/>
                      )}/>
                          <div>
                              <ReactCSSTransitionGroup
                                  transitionName="fade"
                                  transitionEnterTimeout={300}
                                  transitionLeaveTimeout={300}
                              >
                                  <Route
                                      location={location}
                                      key={location.key}
                                      path="/:step"
                                      component={SignUp}
                                  />
                              </ReactCSSTransitionGroup>
                          </div>
                      </div>
                  )}/>
              </ConnectedRouter>
          </Provider>

      )
;

export default Routing;
