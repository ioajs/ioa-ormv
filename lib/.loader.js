'use strict';

const app = require('@app');

app.emit("loads", {
   "model": {
      "level": 20,
   },
});

module.exports = {
   'index.js': {
      level: 15,
      module(data) {
         const { Ormv, ormv } = data;
         app.emit("Ormv", Ormv);
         app.emit("ormv", ormv);
         return data;
      }
   }
}