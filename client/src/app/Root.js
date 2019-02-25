import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router' // react-router v4
import {ConnectedRouter} from 'connected-react-router'
import {createStore, history} from './store';
import Nav from './modules/nav';
import Bookmarks from './modules/bookmarks';
import Search from './modules/search';

import './Root.scss';

// create the store
const store = createStore();

class Root extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Nav/>
              <div className="bodySection">
                <Switch>
                  <Route exact path="/bookmarks" component={Bookmarks}/>
                  <Route exact path="/search" component={Search}/>
                  <Redirect to="/search"/>
                </Switch>
              </div>
            </div>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default Root;
