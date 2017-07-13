const FunctionType = require('../core/FunctionType');
const Field = require('../core/Field');
const _ = require('lodash');

const functionField = (id, name, args) => {
  const result = { type: Field, id, name, fieldType: FunctionType };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, ['isRequired', 'default', 'validator', 'isListType']));
};

module.exports = functionField;
