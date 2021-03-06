const {deleteRequest} = require('./util');


describe('DELETE [delete all]', function() {
  it('delete user', function(done) {
    deleteRequest('/api/user/delete')
        .then(function(error) {
          done(error);
        });
  });
  it('delete person', function(done) {
    deleteRequest('/api/person/delete')
        .then(function(error) {
          done(error);
        });
  });
  it('delete pet', function(done) {
    deleteRequest('/api/pet/delete')
        .then(function(error) {
          done(error);
        });
  });
  it('delete vaccine', function(done) {
    deleteRequest('/api/vaccine/delete')
        .then(function(error) {
          done(error);
        });
  });
  it('delete error', function(done) {
    deleteRequest('/api/error/delete')
        .then(function(error) {
          done(error);
        });
  });
});
