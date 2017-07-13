const Record = require('../core/Record');
const RecordType = require('../core/RecordType');
const _ = require('lodash');

const recordType = (id, name, fields, args) => {
  const result = { type: RecordType, id, name, fields, baseType: Record, isInnerType: false };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, 'traits', 'baseType', 'isInnerType'));
};

module.exports = recordType;
