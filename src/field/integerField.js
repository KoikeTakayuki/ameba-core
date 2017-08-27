const core = require('../core');
const Field = require('../core/Field');
const _ = require('lodash');

const integerField = (id, name, args) => {
  const result = {
    type: Field,
    id,
    name,
    fieldType: core.Integer,
    isRequired: false,
    default: null,
    isUnique: false,
    isAutoIncrement: false,
    validator: null,
    isListType: false,
  };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, ['isRequired', 'default', 'isUnique', 'isAutoIncrement', 'validator', 'isListType']));
};

module.exports = integerField;
