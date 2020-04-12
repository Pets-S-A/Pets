const request = require('supertest');
const server = require('..');
const fixturesPerson = require('./fixtures/person.json');
const fixturesUser = require('./fixtures/user.json');


describe('POST /api/user/create', function() {
  it('create user', function(done) {
    request(server)
        .post('/api/user/create')
        .send(fixturesUser.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('create person', function(done) {
    request(server)
        .post('/api/person/create')
        .send(fixturesPerson.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('update person', function(done) {
    request(server)
        .delete('/api/person/delete/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});

