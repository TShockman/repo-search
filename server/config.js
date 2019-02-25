const {GITHUB_USER, GITHUB_PASS} = require('./secrets');

const basicAuthString = Buffer.from(`${GITHUB_USER}:${GITHUB_PASS}`).toString('base64');

module.exports = {
  API_PREFIX: `/api`,
  PORT: 3001,
  GITHUB_API_BASE: 'https://api.github.com',
  GITHUB_SEARCH_SORT: 'best-match',
  GITHUB_HEADERS: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Basic ${basicAuthString}`
  }
};