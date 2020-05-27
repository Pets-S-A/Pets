require('dotenv').config();

const ENV = {
  env: process.env.NODE_ENV,
  serverDb: process.env.SERVER_DB,
  serverDbDev: process.env.SERVER_DB_DEV,
  JWTSecret: process.env.JWT_SECRET,
};

module.exports = ENV;
