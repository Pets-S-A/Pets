const request = require('supertest');
const server = require('..');

describe('GET /api/vet/all', function() {
  it('responds with json', function(done) {
    request(server)
        .get('/api/vet/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

