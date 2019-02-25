import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import RepoList from '../common/repo-list';

import './bookmarks.scss';

export default class Bookmarks extends PureComponent {
  static propTypes = {
    repos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          full_name: PropTypes.string.isRequired,
          stargazers_count: PropTypes.number.isRequired,
          forks_count: PropTypes.number.isRequired,
          html_url: PropTypes.string
        })).isRequired,
    getBookmarks: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBookmarks();
  }

  handleRefresh = event => {
    event.stopPropagation();
    this.props.getBookmarks();
  };

  render() {
    const {repos} = this.props;
    return (
        <section>
          <div className="bookmarksHead">
            <h2>Bookmarks</h2>
            <button onClick={this.handleRefresh}>Refresh</button>
          </div>
          <RepoList repos={repos}/>
        </section>
    )
  }
}