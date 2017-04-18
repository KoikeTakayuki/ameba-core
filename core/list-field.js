const Field = require('./field');

function ListField(id, fieldType, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = true;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return Field(id, fieldType, isRequired, isListField, defaultValue);
}

module.exports = ListField;
