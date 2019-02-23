const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config');

const app = express();

// parse json
app.use(bodyParser.json());

// add services
require('./services/search')(app);
require('./services/bookmarks')(app);

app.listen(PORT);