const request = require('supertest');
const server = require('..');
const {
  personFixture,
  userFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('POST [create]', function() {
  it('create user', function(done) {
    request(server)
        .post('/api/user/create')
        .send(userFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('create person', function(done) {
    request(server)
        .post('/api/person/create')
        .send(personFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('create pet', function(done) {
    request(server)
        .post('/api/pet/create')
        .send(petFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('create vaccine', function(done) {
    request(server)
        .post('/api/vaccine/create')
        .send(vaccineFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
