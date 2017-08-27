const recordType = require('../recordType');
const PermissionOwner = require('./PermissionOwner');
const SecurityRole = require('./SecurityRole');
const recordField = require('../field/recordField');

module.exports = recordType('Security.User', 'User', [], { baseType: PermissionOwner });
