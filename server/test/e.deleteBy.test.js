const {deleteRequest} = require('./util');
const {
  personFixture,
  userFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('DELETE [delete by id]', function() {
  it('delete user', function(done) {
    deleteRequest(`/api/user/delete/${userFixture.create._id}`)
        .then(function(response) {
          done(null);
        });
  });
  it('delete person', function(done) {
    deleteRequest(`/api/person/delete/${personFixture.create._id}`)
        .then(function(response) {
          done(null);
        });
  });
  it('delete pet', function(done) {
    deleteRequest(`/api/pet/delete/${petFixture.create._id}`)
        .then(function(response) {
          done(null);
        });
  });
  it('delete vaccine', function(done) {
    deleteRequest(`/api/vaccine/delete/${vaccineFixture.create._id}`)
        .then(function(response) {
          done(null);
        });
  });
});
