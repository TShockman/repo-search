const axios = require('axios');

const {
  API_PREFIX,
  GITHUB_API_BASE,
  GITHUB_SEARCH_SORT
} = require('../config');

const githubHeaders = {'Accept': 'application/vnd.github.v3+json'};

module.exports = app => {

  const getRepo = (req, res) => {
    const {rid} = req.params;

    axios.get(`${GITHUB_API_BASE}/repositories/${rid}`, {'headers': githubHeaders})
        .then(githubRes => {
          if (githubRes.status === 200) {
            res.send(githubRes.data);
          } else {
            res.sendStatus(githubRes.status);
          }
        })
        .catch(_ => res.sendStatus(500));
  };

  const searchRepos = (req, res) => {
    const term = req.params.term;

    axios.get(`${GITHUB_API_BASE}/search/repositories?q=${term}&sort=${GITHUB_SEARCH_SORT}`)
        .then(githubRes => {
          if (githubRes.status === 200) {
            res.send(githubRes.data);
          } else {
            res.sendStatus(githubRes.status);
          }
        })
  };

  app.get(`${API_PREFIX}/repo/:rid`, getRepo);
  app.get(`${API_PREFIX}/repo/search/:term`, searchRepos);
};