'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const { start } = require('./src/server');
const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3004;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    start(PORT);
  })
  .catch((e) => console.error('Could not start server', e.message));
