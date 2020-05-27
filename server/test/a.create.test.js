const {postRequest} = require('./util');
const {
  personFixture,
  userFixture,
  petFixture,
  vaccineFixture,
  provisoryIDFixture,
} = require('./fixtures');


describe('POST [create]', function() {
  it('create user', function(done) {
    postRequest('/api/user/create', userFixture.create)
        .then(function(error) {
          done(error);
        });
  });
  it('create person', function(done) {
    postRequest('/api/person/create', personFixture.create)
        .then(function(error) {
          done(error);
        });
  });
  it('create pet', function(done) {
    postRequest('/api/pet/create', petFixture.create)
        .then(function(error) {
          done(error);
        });
  });
  it('create vaccine', function(done) {
    postRequest('/api/vaccine/create', vaccineFixture.create)
        .then(function(error) {
          done(error);
        });
  });
  it('create provisoryID', function(done) {
    postRequest('/api/pet/shared/getProvisoryID', provisoryIDFixture.create)
        .then(function(error) {
          done(error);
        });
  });
});
