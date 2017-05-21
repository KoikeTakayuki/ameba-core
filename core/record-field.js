const field = require('./field');

function recordField(id, name, fieldType, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, name, fieldType, isRequired, isListField, defaultValue, validator);
}

module.exports = recordField;
