const axios = require('axios');
const {
  GITHUB_API_BASE,
  API_PREFIX,
  GITHUB_HEADERS
} = require('../config');

// seed bookmarks with some examples
const bookmarks = [172260683, 237159, 27193779, 17618901];

const getRepoFactory = rid => {
  return axios.get(`${GITHUB_API_BASE}/repositories/${rid}`, {'headers': GITHUB_HEADERS});
};

module.exports = app => {

  const getBookmarkedProject = (req, res) => {
    const {rid} = req.params;

    axios.get(`${GITHUB_API_BASE}/repositories/${rid}`, {'headers': GITHUB_HEADERS})
        .then(githubRes => {
          if (githubRes.status === 200) {
            res.send(githubRes.data);
          } else {
            res.sendStatus(githubRes.status);
          }
        })
        .catch(_ => res.sendStatus(500));
  };

  const bookmarkProject = (req, res) => {
    const {rid} = req.body;
    if (rid) {
      bookmarks.push(rid);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  };

  const getBookmarkedProjects = (req, res) => {
    Promise.all(bookmarks.map(getRepoFactory))
        .then(responses => {
          res.send(responses.filter(r => r.status === 200).map(r => r.data))
        })
  };

  app.post(`${API_PREFIX}/bookmarks`, bookmarkProject);
  app.get(`${API_PREFIX}/bookmarks`, getBookmarkedProjects);
};