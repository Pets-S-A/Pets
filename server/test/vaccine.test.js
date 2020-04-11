const request = require('supertest');
const server = require('..');

describe('GET /api/vaccine/all', function() {
  it('responds with json', function(done) {
    request(server)
        .get('/api/vaccine/all')
        .auth('username', 'password')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
