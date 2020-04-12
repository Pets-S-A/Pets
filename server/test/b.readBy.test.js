const request = require('supertest');
const server = require('..');
const {
  userFixture,
} = require('./fixtures');


describe('GET [read by id]', function() {
  it('read pets by [user id]', function(done) {
    request(server)
        .get(`/api/pet/allByUserID/${userFixture.create._id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });
});
