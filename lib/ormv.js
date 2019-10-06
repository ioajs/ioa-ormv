'use strict';

const app = require('@app');
const Ormv = require('ormv');

const { config } = app;
const { host, port, database, username, password, logger } = config;

const ormv = new Ormv({
   host,
   port,
   database,
   username,
   password,
   logger
})

ormv.connect();

module.exports = {
   Ormv,
   ormv
};