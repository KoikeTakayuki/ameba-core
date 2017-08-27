const recordType = require('../recordType');
const numberField = require('../field/numberField');
const textField = require('../field/textField');
const SystemRecord = require('../util/SystemRecord');

const fields = [
  numberField('uid', 'uid'),
  textField('id', 'id'),
  textField('name', 'name'),
];

module.exports = recordType('Security.PermissionOwner', 'PermissionOwner', fields, { traits: [SystemRecord] });
