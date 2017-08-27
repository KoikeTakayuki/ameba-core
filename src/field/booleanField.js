const core = require('../core');
const Field = require('../core/Field');
const _ = require('lodash');

const booleanField = (id, name, args) => {
  const result = {
    type: Field,
    id,
    name,
    fieldType: core.Boolean,
    isRequired: false,
    default: null,
    isListType: false,
  };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, ['isRequired', 'default', 'isListType']));
};

module.exports = booleanField;
