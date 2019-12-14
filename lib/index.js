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
      module({ Ormv, ormv }) {
         app.emit("Ormv", Ormv);
         app.emit("ormv", ormv);
         app.Ormv = Ormv;
         return ormv;
      }
   }
});
