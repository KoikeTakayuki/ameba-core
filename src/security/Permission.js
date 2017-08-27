const recordType = require('../recordType');
const recordField = require('../field/recordField');
const booleanField = require('../field/booleanField');
const numberField = require('../field/numberField');

const fields = [
  numberField('uid', 'uid'),
  recordField('permissionOwner', 'permissionOwner'),
  recordField('recordType', 'recordType'),
  booleanField('create', 'create'),
  booleanField('read', 'read'),
  booleanField('update', 'update'),
  booleanField('delete', 'delete'),
];

module.exports = recordType('Security.Permission', 'Permission', fields);
