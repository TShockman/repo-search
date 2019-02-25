const {
  API_PREFIX
} = require('../config');

// seed bookmarks with some examples
const bookmarks = require('../static/starter-bookmarks.json');

module.exports = app => {

  const bookmarkProject = (req, res) => {
    const repo = req.body;
    if (repo) {
      bookmarks.push(repo);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  };

  const getBookmarkedProjects = (req, res) => {
    res.send(bookmarks);
  };

  app.post(`${API_PREFIX}/bookmarks`, bookmarkProject);
  app.get(`${API_PREFIX}/bookmarks`, getBookmarkedProjects);
};