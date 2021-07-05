'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const { start } = require('./src/server');

const PORT = process.env.PORT || 3004;
mongoose
  .connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    start(PORT);
  })
  .catch((e) => console.error('Could not start server', e.message));
