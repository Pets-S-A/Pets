/* eslint-disable max-len */
const {getRequest} = require('./util');
const {
  userFixture,
  provisoryIDFixture,
} = require('./fixtures');


describe('GET [read by id]', function() {
  it('read pets by [user id]', function(done) {
    getRequest(`/api/pet/allByUserID/${userFixture.create._id}`)
        .then(function(error) {
          done(error);
        });
  });
  it('read pet by [provisory id]', function(done) {
    getRequest(`/api/pet/shared/getPet/${provisoryIDFixture.create.provisoryID}`)
        .then(function(error) {
          done(error);
        });
  });
});
