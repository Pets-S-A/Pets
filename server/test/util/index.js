const request = require('supertest');
const server = require('../..');

module.exports = {
  postRequest: async (url, body = {}) => {
    try {
      const response = await request(server)
          .post(url)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/);
      return response.body.success ? null : response.body.message;
    } catch (error) {
      return error;
    }
  },
  getRequest: async (url) => {
    try {
      const response = await request(server)
          .get(url)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/);
      return response.body.success ? null : response.body.message;
    } catch (error) {
      return error;
    }
  },
  deleteRequest: async (url, body = {}) => {
    try {
      const response = await request(server)
          .delete(url)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/);
      return response.body.success ? null : response.body.message;
    } catch (error) {
      return error;
    }
  },
};
