const {getRequest} = require('./util');

describe('GET [read all]', function() {
  it('read errors', function(done) {
    getRequest('/api/error/all')
        .then((error) => {
          done(error);
        });
  });
  it('read user', function(done) {
    getRequest('/api/user/all')
        .then((error) => {
          done(error);
        });
  });
  it('read person', function(done) {
    getRequest('/api/person/all')
        .then((error) => {
          done(error);
        });
  });
  it('read pet', function(done) {
    getRequest('/api/pet/all')
        .then((error) => {
          done(error);
        });
  });
  it('read vaccine', function(done) {
    getRequest('/api/vaccine/all')
        .then((error) => {
          done(error);
        });
  });
  it('read vet', function(done) {
    getRequest('/api/vet/all')
        .then((error) => {
          done(error);
        });
  });
});
