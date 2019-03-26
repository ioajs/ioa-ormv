'use strict';

const component = require('@app');

component.setOption({
   "model": {
      "level": 20,
   },
});

const { parentApps } = component;

module.exports = {
   'index.js': {
      level: 15,
      module(data) {
         for (const name in parentApps) {
            const app = parentApps[name];
            Object.assign(app, data);
         }
         return data;
      }
   }
}