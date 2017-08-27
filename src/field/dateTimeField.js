const core = require('../core');
const Field = require('../core/Field');
const _ = require('lodash');

const dateField = (id, name, args) => {
  const result = {
    type: Field,
    id,
    name,
    fieldType: core.DateTime,
    isRequired: false,
    defaultCurrentTimeOnCreate: false,
    defaultCurrentTimeOnUpdate: false,
    validator: null,
    isListType: false,
  };

  if (!args) {
    return result;
  }

  return Object.assign(result, _.pick(args,
    ['isRequired', 'defaultCurrentTimeOnCreate','defaultCurrentTimeOnUpdate', 'validator', 'isListType']));
};

module.exports = dateField;
