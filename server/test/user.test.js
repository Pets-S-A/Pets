const request = require('supertest');
const server = require('..');
const fixtures = require('./fixtures/user.json');

describe('GET /user/all', function() {
  it('responds with json', function(done) {
    request(server)
        .get('/user/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

console.log(fixtures.createUser);
describe('POST /api/user/create', function() {
  it('responds with json', function(done) {
    request(server)
        .post('/api/user/create')
        .send(fixtures.createUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
