import React, { Component } from 'react';
import './Root.scss';

import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router' // react-router v4
import {ConnectedRouter} from 'connected-react-router'
import {createStore, history} from './store';

// create the store
const store = createStore();

class Root extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/" render={() => (<div>Match</div>)} />
                <Route render={() => (<div>Miss</div>)} />
              </Switch>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default Root;
