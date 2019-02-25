import {Record} from 'immutable';
import {ADD_BOOKMARK, GET_BOOKMARKS_FULFILLED} from './actions';

export const BookmarkState = new Record({
  repos: []
});

export default (state = new BookmarkState(), action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      return state.set('repos', state.get('repos').push(action.repo));
    }
    case GET_BOOKMARKS_FULFILLED: {
      return state.set('repos', action.repos);
    }
    default:
      return state;
  }
}