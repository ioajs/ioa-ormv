'use strict';

const app = require('@app');

app.emit("loads", {
   "model": {
      "level": 20,
   },
});

app.loader({
   'ormv.js': {
      level: 15,
      module(data) {
         app.emit("Ormv", data.Ormv);
         app.emit("ormv", data.ormv);
         app.emit("database", data.database);
      }
   }
});
