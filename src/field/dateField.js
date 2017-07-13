const defaultDateType = require('../core/DateType').Date;
const Field = require('../core/Field');
const _ = require('lodash');

const dateField = (id, name, args) => {
  const result = { type: Field, id, name, fieldType: defaultDateType };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args, ['fieldType', 'isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = dateField;
