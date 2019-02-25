import bookmarksReducer, {BookmarkState} from '../reducer';
import {ADD_BOOKMARK, GET_BOOKMARKS_FULFILLED} from '../actions';

describe('Bookmarks Reducer', () => {
  it('Initializes state to empty', () => {
    let state = bookmarksReducer(undefined, {type: 'bogus'});
    expect(state.repos).toEqual([]);
  });
  it('Adds new bookmarks to the list', () => {
    let state = bookmarksReducer(undefined, {type: ADD_BOOKMARK, repo: {id: 123}});
    expect(state.repos).toEqual([{id: 123}]);
  });
  it('Replaces bookmarks list when bookmarks are retrieved from server', () => {
    const repos = [{id: 123}, {id: 456}, {id: 789}];
    let state = new BookmarkState({repos: [{id: 999}]});
    state = bookmarksReducer(state, {type: GET_BOOKMARKS_FULFILLED, repos: repos});
    expect(state.repos.length).toBe(3);
    expect(state.repos).toEqual(repos);
  });
});