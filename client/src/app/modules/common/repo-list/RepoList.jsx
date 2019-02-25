import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import RepoCard from '../repo-card/RepoCard';

import './repo-list.scss';

export default class RepoList extends PureComponent {
  static propTypes = {
    repos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          full_name: PropTypes.string.isRequired,
          stargazers_count: PropTypes.number.isRequired,
          forks_count: PropTypes.number.isRequired,
    })).isRequired,
    bookmark: PropTypes.func
  };

  render() {
    const {repos, bookmark} = this.props;

    return (
        <div className="repoList">
          {repos.map(repo => <RepoCard key={repo.id} repo={repo} bookmark={bookmark}/>)}
        </div>
    )
  }
}