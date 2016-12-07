'use strict';

const dotenv = require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// const artistRoute = require('./routes/api/artist.js');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

// app.use('/api/artist', artistRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
