import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './repo-card.scss';

export default class RepoCard extends PureComponent {
  static propTypes = {
    repo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      full_name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
    }).isRequired,
    bookmark: PropTypes.func
  };

  handleClick = event => {
    event.stopPropagation();
    const {bookmark, repo} = this.props;
    bookmark(repo);
  };

  render() {
    const {bookmark, repo} = this.props;
    const {full_name, stargazers_count, forks_count} = repo;

    return (
        <div className="repoCard">
          <h4>{full_name}</h4>
          <p>Stars: {stargazers_count}</p>
          <p>Forks: {forks_count}</p>
          {bookmark && <button onClick={this.handleClick}>Bookmark</button>}
        </div>
    )
  }
}