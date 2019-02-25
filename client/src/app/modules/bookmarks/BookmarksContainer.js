import {connect} from 'react-redux';
import Bookmarks from './Bookmarks';
import {GET_BOOKMARKS_REQUESTED} from './actions';
import {selectBookmarksState} from './selectors';

function mapStateToProps(state) {
  const {repos} = selectBookmarksState(state);
  return {repos};
}

function mapDispatchToProps(dispatch) {
  return {
    getBookmarks: () => {
      return dispatch({
        type: GET_BOOKMARKS_REQUESTED
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);