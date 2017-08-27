const Field = require('../core/Field');
const _ = require('lodash');

const recordField = (id, name, fieldType, args) => {
  const result = {
    type: Field,
    id,
    name,
    fieldType,
    isRequired: false,
    default: null,
    isUnique: false,
    validator: null,
    isListType: false,
  };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = recordField;
