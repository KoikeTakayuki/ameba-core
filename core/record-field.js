const field = require('./field');

function recordField(id, fieldType, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, fieldType, isRequired, isListField, defaultValue, validator);
}

module.exports = recordField;
