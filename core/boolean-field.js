const Types = require('./types');
const field = require('./field');

function booleanField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;

  return field(id, Types.BooleanType, isRequired, isListField, defaultValue);
}

module.exports = booleanField;
