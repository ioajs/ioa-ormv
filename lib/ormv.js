'use strict';

const app = require('@app');
const Ormv = require('ormv');
const consoln = require("consoln");

let { config } = app;

if (Array.isArray(config) === false) {
   config = [config];
}

const database = {};

for (const item of config) {

   const name = item.database;
   const ormv = new Ormv(item);

   ormv.connect(error => {
      if (error) {
         consoln.error(`database "${name}" connect fail`, error.stack);
      } else {
         consoln.success(`database "${name}" connect success`);
      }
   });

   database[name] = ormv;

}

const [firstConfig] = config;
const ormv = database[firstConfig.database];

module.exports = {
   Ormv,
   ormv,
   database
};
