'use strict';

const app = require('@app');
const Ormv = require('ormv');
const consoln = require("consoln");

let { config } = app;

if (Array.isArray(config) === false) {
   config = [config];
}

const dbs = {};

for (const item of config) {

   const { database } = item;
   const ormv = new Ormv(item);

   ormv.connect(error => {
      if (error) {
         consoln.error(`database "${database}" connect fail`, error.stack);
      } else {
         consoln.success(`database "${database}" connect success`);
      }
   });

   dbs[database] = ormv;

}

const [{ database }] = config;
const ormv = dbs[database];

Ormv.dbs = dbs;

module.exports = {
   Ormv,
   ormv
};
