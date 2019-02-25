import {BOOKMARK_API, SEARCH_API} from './endpoints';
import {parseResponse} from './utils';

// ensure there's only ever one service
const _singleton = Symbol();

// service helper for interacting with the backend
export default class RepoService {
  constructor(singletonToken) {
    if(_singleton !== singletonToken) {
      throw new Error('Cannot instantiate directly');
    }
  }

  static get instance() {
    if(!this[_singleton]) {
      this[_singleton] = new RepoService(_singleton);
    }
    return this[_singleton];
  }

  // search repos for the term
  search(term) {
    return fetch(`${SEARCH_API}/${term}`)
        .then(parseResponse);
  }

  // create a bookmark
  createBookmark(rid) {
    console.log('fetching bookmarks')
    return fetch(`${BOOKMARK_API}`, {
      method:'post',
      body: JSON.stringify({rid})
    }).then(parseResponse);
  }

  // get all bookmarks
  getBookmarks() {
    return fetch(`${BOOKMARK_API}`)
        .then(parseResponse);
  }

}