const request = require('supertest'),
    server = require('..');

describe('GET /api/person/all', function () {
    it('responds with json', function (done) {
        request(server)
            .get('/api/person/all')
            .auth('username', 'password')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
