'use strict';

const { ormv } = require('@app');

module.exports = ormv.model('admin', {
  'id': {
     type: 'integer',
     primaryKey: true
  },
  'name': {
     type: 'char',
     comment: "名称",
     uniqueIndex: true,
  },
  'address': [
     {
        type: 'array',
        comment: "地址"
     }
  ],
  'email': {
     type: 'email',
     uniqueIndex: true,
  },
})
