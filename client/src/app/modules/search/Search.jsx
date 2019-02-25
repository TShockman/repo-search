import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './search.scss';
import RepoList from '../common/repo-list/RepoList';

export default class Search extends PureComponent {
  static propTypes = {
    search: PropTypes.func.isRequired,
    bookmark: PropTypes.func.isRequired,
    repos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          full_name: PropTypes.string.isRequired,
          stargazers_count: PropTypes.number.isRequired,
          forks_count: PropTypes.number.isRequired,
        })).isRequired,
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired
  };

  handleInputChange = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.updateQuery(event.target.value);
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.stopPropagation();
      this.props.search();
    }
  };

  handleClick = event => {
    event.stopPropagation();
    this.props.search();
  };

  render() {
    const {bookmark, repos, query} = this.props;

    return (
      <section>
        <div className="searchHead">
          <h2>Search</h2>
          <span>
            <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} value={query} placeholder="Enter a search query"/>
            <button onClick={this.handleClick} disabled={query.length === 0}>Submit</button>
          </span>
        </div>
        <RepoList repos={repos} bookmark={bookmark}/>
      </section>
    );
  }
}