const recordType = require('../recordType');
const PermissionOwner = require('./PermissionOwner');

module.exports = recordType('Security.Role', 'Role', [], { baseType: PermissionOwner });
