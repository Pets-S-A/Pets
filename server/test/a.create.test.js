const {postRequest} = require('./util');
const {
  personFixture,
  userFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('POST [create]', function() {
  it('create user', function(done) {
    postRequest('/api/user/create', userFixture.create)
        .then(function(response) {
          done(null);
        });
  });
  it('create person', function(done) {
    postRequest('/api/person/create', personFixture.create)
        .then(function(response) {
          done(null);
        });
  });
  it('create pet', function(done) {
    postRequest('/api/pet/create', petFixture.create)
        .then(function(response) {
          done(null);
        });
  });
  it('create vaccine', function(done) {
    postRequest('/api/vaccine/create', vaccineFixture.create)
        .then(function(response) {
          done(null);
        });
  });
});
