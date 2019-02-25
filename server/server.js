const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {PORT} = require('./config');

const app = express();

// enable cors
app.use(cors());

// parse json
app.use(bodyParser.json());

// add services
require('./services/search')(app);
require('./services/bookmarks')(app);

app.listen(PORT);