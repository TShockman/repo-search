import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import './nav.scss';

export default class Nav extends PureComponent {

  render() {
    return (
        <nav>
          <h1>RepoSearch</h1>
          <span>
            <Link to="/search">Search</Link>
            <Link to="/bookmarks">Bookmarks</Link>
          </span>
        </nav>
    )
  }
}