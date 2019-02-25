const {
  API_PREFIX
} = require('../config');

// seed bookmarks with some examples
const bookmarks = require('../static/starter-bookmarks.json');

module.exports = app => {

  const bookmarkProject = (req, res) => {
    const repo = req.body;
    if (repo) {
      const currentIndex = bookmarks.findIndex(r => r.id === repo.id);
      if (currentIndex === -1) {
        bookmarks.push(repo);
      } else {
        bookmarks[currentIndex] = repo;
      }
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