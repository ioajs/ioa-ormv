'use strict';

const app = require('@app');

app.emit("loads", {
   "model": {
      "level": 20,
   },
});

module.exports = {
   "config": null,
   'ormv.js': {
      level: 15,
      module({ Ormv, ormv }) {
         app.emit("Ormv", Ormv);
         app.emit("ormv", ormv);
         app.Ormv = Ormv;
         return ormv;
      }
   }
}