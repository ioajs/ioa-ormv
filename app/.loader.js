'use strict';

const component = require('@app');

component.shared("levels", {
   "model": {
      "level": 20,
   },
});

module.exports = {
   'index.js': {
      level: 15,
      module(data) {
         const { Ormv, ormv } = data;
         component.shared("Ormv", Ormv);
         component.shared("ormv", ormv);
         return data;
      }
   }
}