jest.mock('../Bookmarks', () => 'Bookmarks');

import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import bookmarksReducer, {BookmarkState} from '../reducer';
import {NAME} from '../actions';
import BookmarksContainer from '../index';

describe('BookmarksContainer', () => {
  it('Provides Bookmarks with correct props', () => {
    const store = createStore(bookmarksReducer, {
      [NAME]: new BookmarkState({
        repos: [
          {id: 123, full_name: "OneTwo/Three"},
          {id: 456, full_name: "FourFive/Six"},
          {id: 789, full_name: "SevenEight/Nine"}
        ]
      })
    });
    const tree = renderer.create(
        <Provider store={store}>
          <BookmarksContainer/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});