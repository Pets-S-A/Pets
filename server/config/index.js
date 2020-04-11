require('dotenv').config();

const ENV = {
  env: process.env.NODE_ENV,
  mongoUri: process.env.MONGODB_URI,
  masterDb: process.env.MASTER_DB,
  serverDb: process.env.SERVER_DB,
  JWTSecret: process.env.JWT_SECRET,
};

module.exports = ENV;
