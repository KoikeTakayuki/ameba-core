const Real = require('../core/NumberType').Real;
const _ = require('lodash');

const recordField = (id, name, fieldType, args) => {
  const result = { id, name, fieldType: Real };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['isRequired', 'default', 'validator', 'isListType']));
};

module.exports = recordField;
