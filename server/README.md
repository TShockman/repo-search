# repo-search server

## server setup
* Ensure you have yarn installed (`brew install yarn`, `apt-get yarn` etc)
* Build the project: `yarn install`
* Start the server: `GITHUB_USER=<your github username> GITHUB_PASS=<your github password> yarn start`

The server runs on port 3001 (can be adjusted in config.js) and requires Github credentials to avoid intense rate limiting from the Github API.


## API Endpoints

### Search

#### `GET /api/search/{term}`
Returns a JSON array of Github repositories (in summary form provided by Github API v3, [see here](https://developer.github.com/v3/)) that match the search term.

### Bookmarks

#### `POST /api/bookmarks`
Adds a bookmark to the server. Accepts requests with a JSON body representing a Github repository in Github API v3 summary form.

#### `GET /api/bookmarks`
Gets JSON array of bookmarked repositories, in Github API v3 summary form.
