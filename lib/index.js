'use strict';

const app = require('@app');
const Ormv = require('ormv');
const consoln = require("consoln");

app.emit("loads", {
   "model": {
      "level": 20,
      before({ root }) {

         const config = root.config["@ioa/ormv"];

         if (config === undefined) {
            throw consoln.error(new Error(`@ioa/ormv组件配置不允许为空`));
         }

         const ormv = new Ormv(config);

         ormv.connect(error => {
            const name = config.database;
            if (error) {
               consoln.error(`database "${name}" connect fail`, error.stack);
            } else {
               consoln.success(`database "${name}" connect success`);
            }
         });

         root.Ormv = Ormv;
         root.ormv = ormv;

      }
   },
});
