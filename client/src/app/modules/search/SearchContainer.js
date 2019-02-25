import {connect} from 'react-redux';
import Search from './Search';
import {selectSearchState} from './selectors';
import {ADD_BOOKMARK} from '../bookmarks/actions';
import {SEARCH_REQUESTED, UPDATE_QUERY} from './actions';

function mapStateToProps(state) {
  const {repos, query} = selectSearchState(state);
  return {repos, query};
}

function mapDispatchToProps(dispatch) {
  return {
    bookmark: repo => dispatch({
      type: ADD_BOOKMARK,
      repo
    }),
    search: () => dispatch({
      type: SEARCH_REQUESTED
    }),
    updateQuery: query => dispatch({
      type: UPDATE_QUERY,
      query
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);