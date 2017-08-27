const mysql = require('mysql2');
const buildRecordTableQuery = require('./src/repository/mysql/queryBuilder/buildRecordTableQuery');
const User = require('./src/security/User');
const PermissionOwner = require('./src/security/PermissionOwner');
const SecurityRole = require('./src/security/SecurityRole');
const UserGroup = require('./src/security/UserGroup');
const core = require('./src/core');


const query = buildRecordTableQuery(User);
console.log(query);
// connection.querRy(query, (err, rows) => {
//   if (err) {
//     throw err;
//   }
//
//   console.log('The solution is: ', rows);
// });


// connection.end();
