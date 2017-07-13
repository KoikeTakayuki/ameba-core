const Real = require('../core/NumberType').Real;
const _ = require('lodash');

const numberField = (id, name, args) => {
  const result = { id, name, fieldType: Real };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, ['fieldType', 'isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = numberField;
