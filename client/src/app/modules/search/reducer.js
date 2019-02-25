import {Record} from 'immutable';
import {SEARCH_REQUESTED, SEARCH_FULFILLED, UPDATE_QUERY} from './actions';

export const SearchState = new Record({
  repos: [],
  query: ''
});

export default (state = new SearchState(), action) => {
  switch (action.type) {
    case UPDATE_QUERY: {
      return state.set('query', action.query);
    }
    case SEARCH_FULFILLED: {
      return state.set('repos', action.repos);
    }
    default:
      return state;
  }
}