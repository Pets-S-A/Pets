const {getRequest} = require('./util');
const {
  personFixture,
  userFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('DELETE [delete by id]', function() {
  it('delete user', function(done) {
    getRequest(`/api/user/delete/${userFixture.create._id}`)
        .then(function(error) {
          done(error);
        });
  });
  it('delete person', function(done) {
    getRequest(`/api/person/delete/${personFixture.create._id}`)
        .then(function(error) {
          done(error);
        });
  });
  it('delete pet', function(done) {
    getRequest(`/api/pet/delete/${petFixture.create._id}`)
        .then(function(error) {
          done(error);
        });
  });
  it('delete vaccine', function(done) {
    getRequest(`/api/vaccine/delete/${vaccineFixture.create._id}`)
        .then(function(error) {
          done(error);
        });
  });
});
