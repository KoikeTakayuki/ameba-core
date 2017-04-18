const Field = require('./field');

function recordField(id, fieldType, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return Field(id, fieldType, isRequired, isListField, defaultValue);
}

module.exports = recordField;
