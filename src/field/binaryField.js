const BinaryType = require('../core/BinaryType');
const Field = require('../core/Field');
const _ = require('lodash');

const binaryField = (id, name, args) => {
  const result = { type: Field, id, name, fieldType: BinaryType };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['fieldType', 'sizeLimit', 'isRequired', 'default', 'validator', 'isListType']));
};

module.exports = binaryField;
