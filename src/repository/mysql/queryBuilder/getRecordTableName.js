const getRootType = require('../../../util/getRootType');

module.exports = recordType => getRootType(recordType).id.replace(/\./g, '_');
