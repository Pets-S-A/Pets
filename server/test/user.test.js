const request = require('supertest');
const server = require('..');
const fixtures = require('./fixtures/user.json');

describe('GET /api/user/all', function() {
  it('responds with json', function(done) {
    request(server)
        .get('/api/user/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

describe('POST /api/api/user/create', function() {
  it('responds with json', function(done) {
    request(server)
        .post('/api/user/create')
        .send(fixtures.createUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

describe('POST /api/user/delete', function() {
  it('responds with json', function(done) {
    request(server)
        .post('/api/user/create')
        .send(fixtures.createUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
