const {getRequest} = require('./util');

describe('GET [read all]', function() {
  it('read errors', function(done) {
    getRequest('/api/error/all')
        .then((response) => {
          done(null);
        });
  });
  it('read user', function(done) {
    getRequest('/api/user/all')
        .then((response) => {
          done(null);
        });
  });
  it('read person', function(done) {
    getRequest('/api/person/all')
        .then((response) => {
          done(null);
        });
  });
  it('read pet', function(done) {
    getRequest('/api/pet/all')
        .then((response) => {
          done(null);
        });
  });
  it('read vaccine', function(done) {
    getRequest('/api/vaccine/all')
        .then((response) => {
          done(null);
        });
  });
});
