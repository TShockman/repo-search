const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config');

const app = express();

// parse json
app.use(bodyParser.json());

// add services
require('./services/github')(app);

app.listen(process.env.PORT || PORT);