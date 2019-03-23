'use strict';

const app = require('@app');

const Ormv = require('ormv');

app.Ormv = Ormv;

const { config } = app;

const { host, port, database, username, password, logger } = config;

const ormv = new Ormv({
   db: {
      host,
      port,
      database,
      username,
      password
   },
   logger
})

ormv.connect();

module.exports = ormv;