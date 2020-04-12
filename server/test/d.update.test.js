const request = require('supertest');
const server = require('..');
const {
  personFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('POST [update]', function() {
  it('update person', function(done) {
    request(server)
        .post('/api/person/update')
        .send(personFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('update pet', function(done) {
    request(server)
        .post('/api/pet/update')
        .send(petFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
  it('update vaccine', function(done) {
    request(server)
        .post('/api/vaccine/update')
        .send(vaccineFixture.create)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
