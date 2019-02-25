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

  render() {
    const {full_name, stargazers_count, forks_count} = this.props.repo;

    return (
        <div className="repoCard">
          <h2>full_name</h2>
          <p>Stars: {stargazers_count}</p>
          <p>Forks: {forks_count}</p>
          <button>Bookmark</button>
        </div>
    )
  }
}