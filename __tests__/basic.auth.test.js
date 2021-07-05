'use strict';

const server = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const base64 = require('base-64');

describe('Basic Auth tests', () => {
  const obj = {
    username: 'ahmad',
    password: '1234',
  };
  test('POST to /signup to create a new user', async () => {
    const response = await supergoose(server.app)
      .post('/api/v1/signup')
      .send(obj);
    //   console.log('response', response);
    expect(response.status).toBe(200);
    expect(response.body.username).toBe(obj.username);
  });

  test('POST to /signin to login as a user (use basic auth)', async () => {
    let test = base64.encode('ahmad:1234');
    const response = await supergoose(server.app)
      .post('/api/v1/signin')
      .set('Authorization', `Basic ${test}`);
    //   .auth(test);;

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('ahmad');
  });
});
