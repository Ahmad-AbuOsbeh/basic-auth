'use strict';

const express = require('express');
const errorHandler = require('./error-middlewares/500');
const notFoundHandler = require('./error-middlewares/404');
const userRouter = require('./auth/router');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
//routes
app.use('/api/v1/', userRouter);
// app.use('/api/v1/signin', userRouter);
app.get('/', (req, res) => {
  res.send('Home Server Route');
});
app.use('*', notFoundHandler);
app.use(errorHandler);

//listen the server
function start(port) {
  app.listen(port, () => console.log(`server up on PORT ${port}`));
}

module.exports = {
  app,
  start,
};
