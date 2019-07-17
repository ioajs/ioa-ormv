# ioa-model

Ormv.js库数据库模型封装

### Install

```
npm install @ioa/model
```

### 环境变量配置文件示例

```js
module.exports = {
   "components": {
      "@ioa/model": {
         "host": "localhost",
         "port": 5432,
         "database": "test",
         "username": "postgres",
         "password": "postgres",
         "logger": true
      },
   }
}
```