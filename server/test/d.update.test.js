const {postRequest} = require('./util');
const {
  personFixture,
  petFixture,
  vaccineFixture,
} = require('./fixtures');


describe('POST [update]', function() {
  it('update person', function(done) {
    postRequest('/api/person/update', personFixture.create)
        .then(function(response) {
          done(null);
        });
  });
  it('update pet', function(done) {
    postRequest('/api/pet/update', petFixture.create)
        .then(function(response) {
          done(null);
        });
  });
  it('update vaccine', function(done) {
    postRequest('/api/vaccine/update', vaccineFixture.create)
        .then(function(response) {
          done(null);
        });
  });
});
