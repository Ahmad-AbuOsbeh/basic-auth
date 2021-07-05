'use strict';
const express = require('express');
const router = express.Router();
// const signUpHandler = require('./middleware/signup');
// const signInHandler = require('./middleware/signin');
const Users = require('./models/users.model');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

// const basicAuth = require('./middleware/basic');

router.post('/signup', signUpHandler);
router.post('/signin', basicAuth);
async function signUpHandler(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const { username, password } = req.body;
    const isExist = await Users.findOne({ username });
    console.log('isExist', isExist);
    if (!isExist) {
      //   console.log('hello from if');
      const user = new Users(req.body);
      const record = await user.save(req.body);
      res.status(200).json(record);
    } else {
      //   console.log('hello from else');
      //   throw new Error(' user already exists');
      next(e);
    }
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
}

async function basicAuth(req, res, next) {
  console.log('hello from basic auth');
  let basicHeaderParts = req.headers.authorization.split(' '); // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  /*
Now that we finally have username and password, let's see if it's valid
1. Find the user in the database by username
2. Compare the plaintext password we now have against the encrypted password in the db
   - bcrypt does this by re-encrypting the plaintext password and comparing THAT
3. Either we're valid or we throw an error
*/
  try {
    const user = await Users.findOne({ username: username });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    } else {
      throw new Error('Invalid User');
    }
  } catch (error) {
    res.status(403).send('Invalid Login');
  }
}

module.exports = router;
