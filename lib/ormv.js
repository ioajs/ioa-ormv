'use strict';

const app = require('@app');
const Ormv = require('ormv');
const consoln = require("consoln");

const { config } = app;
// const { dialect, host, port, database, username, password, logger, sync } = config;

const ormv = new Ormv(config)

ormv.connect(error => {
   if (error) {
      consoln.error('pgsql ', error.stack);
   } else {
      consoln.success('pgsql connect success');
   }
});

module.exports = {
   Ormv,
   ormv
};