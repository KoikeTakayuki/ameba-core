const Types = require('./types');
const Field = require('./field');

function booleanField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;

  return Field(id, Types.BooleanType, isRequired, isListField, defaultValue);
}

module.exports = booleanField;
