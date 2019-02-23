const axios = require('axios');

const {
  API_PREFIX,
  GITHUB_API_BASE,
  GITHUB_SEARCH_SORT
} = require('../config');

module.exports = app => {

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

  app.get(`${API_PREFIX}/search/:term`, searchRepos);
};