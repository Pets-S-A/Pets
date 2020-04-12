const {deleteRequest} = require('./util');


describe('POST [delete all]', function() {
  it('delete user', function(done) {
    deleteRequest('/api/user/delete')
        .then(function(response) {
          done(null);
        });
  });
  it('delete person', function(done) {
    deleteRequest('/api/person/delete')
        .then(function(response) {
          done(null);
        });
  });
  it('delete pet', function(done) {
    deleteRequest('/api/pet/delete')
        .then(function(response) {
          done(null);
        });
  });
  it('delete vaccine', function(done) {
    deleteRequest('/api/vaccine/delete')
        .then(function(response) {
          done(null);
        });
  });
});
