'use strict';

const component = require('@app');

component.setOption({
   "model": {
      "level": 20,
   },
});

module.exports = {
   'ormv.js': {
      level: 11,
      module(data) {
         for (const app of component.dependApps) {
            Object.assign(app, data);
         }
         return data;
      }
   }
}