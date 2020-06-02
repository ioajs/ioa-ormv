'use strict';

const ioa = require('ioa');

const { ormv } = ioa.main;

if (ormv) {

  const { sync, syncs } = ioa.argv;
  
  if (sync) {
    ormv.sync(...sync);
  } else if (syncs) {
    ormv.syncs(...syncs);
  }

}
