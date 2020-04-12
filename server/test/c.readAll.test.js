const request = require('supertest');
const server = require('..');

describe('GET [read all]', function() {
  it('read errors', function(done) {
    request(server)
        .get('/api/error/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('read user', function(done) {
    request(server)
        .get('/api/user/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('read person', function(done) {
    request(server)
        .get('/api/person/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('read pet', function(done) {
    request(server)
        .get('/api/pet/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('read vaccine', function(done) {
    request(server)
        .get('/api/vaccine/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('read pet', function(done) {
    request(server)
        .get('/api/pet/all')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
