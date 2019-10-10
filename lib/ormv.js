'use strict';

const app = require('@app');
const Ormv = require('ormv');

const { config } = app;
const { dialect, host, port, database, username, password, logger } = config;

const ormv = new Ormv({
   dialect,
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