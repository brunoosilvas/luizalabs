const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileAsync');

const mock = function () {
   const adapter = new FileSync('config/mock/ceps.json');
   const datasource = lowdb(adapter);
   return datasource;
}

module.exports = function () {
   return mock;
};