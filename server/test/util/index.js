const request = require('supertest');
const server = require('../..');

module.exports = {
  postRequest: async (url, body = {}) => {
    try {
      const answer = await request(server)
          .post(url)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
      console.log(answer);
      return answer;
    } catch (error) {
      return error;
    }
  },
  getRequest: async (url) => {
    try {
      return await request(server)
          .get(url)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
    } catch (error) {
      return error;
    }
  },
  deleteRequest: async (url, body = {}) => {
    try {
      return await request(server)
          .delete(url)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
    } catch (error) {
      return error;
    }
  },
};
