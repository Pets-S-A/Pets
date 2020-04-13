const {getRequest} = require('./util');
const {
  userFixture,
} = require('./fixtures');


describe('GET [read by id]', function() {
  it('read pets by [user id]', function(done) {
    getRequest(`/api/pet/allByUserID/${userFixture.create._id}`)
        .then(function(error, response) {
          done(null);
        });
  });
});
