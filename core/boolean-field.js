const Types = require('./types');
const field = require('./field');

function booleanField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;
  const validator = args && args.validator;

  return field(id, name, Types.BooleanType, isRequired, isListField, defaultValue, validator);
}

module.exports = booleanField;
