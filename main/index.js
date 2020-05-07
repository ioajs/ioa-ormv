'use strict';

const app = require('@app');

app.on("@ioa/config");
app.on("./lib");

app.loader({
  controller: {
    level: 50
  }
});
