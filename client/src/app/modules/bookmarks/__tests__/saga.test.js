import {call, put} from 'redux-saga/effects';
import {addBookmark, getBookmarks, bookmarksService} from '../saga';
import {GET_BOOKMARKS_FULFILLED, GET_BOOKMARKS_REQUESTED} from '../actions';


describe('BookmarksSaga', () => {
  it('Adds bookmark to server and requests bookmark list', () => {
    const repo = {id: 123, full_name: 'mock/repo'};
    const gen = addBookmark({repo});
    expect(gen.next().value).toEqual(call(bookmarksService.createBookmark, repo));
    expect(gen.next().value).toEqual(put({type: GET_BOOKMARKS_REQUESTED}));
    expect(gen.next().done).toBe(true);
  });
  it('Gets the bookmark list successfully', () => {
    const gen = getBookmarks();
    const bookmarks = [{id: 123}, {id: 456}];
    expect(gen.next().value).toEqual(call(bookmarksService.getBookmarks));
    expect(gen.next(bookmarks).value).toEqual(put({type: GET_BOOKMARKS_FULFILLED, repos: bookmarks}));
    expect(gen.next().done).toBe(true);
  });
  it('Gets sends alert on get bookmark list  failure', () => {
    const gen = getBookmarks();
    expect(gen.next().value).toEqual(call(bookmarksService.getBookmarks));
    expect(gen.next(null).value).toEqual(call(alert, "Failed to retrieve bookmarks"));
    expect(gen.next().done).toBe(true);
  });
});