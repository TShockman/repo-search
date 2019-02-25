import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router' // react-router v4
import {ConnectedRouter} from 'connected-react-router'
import {createStore, history} from './store';
import Nav from './modules/nav/Nav';

import './Root.scss';

// create the store
const store = createStore();

class Root extends Component {
  render() {
    console.log('rendering root')
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Nav/>
              <div className="bodySection">
                <Switch>
                  <Route exact path="/" render={() => (<div>Match</div>)} />
                  <Route render={() => (<div>Miss</div>)} />
                </Switch>
              </div>
            </div>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default Root;
