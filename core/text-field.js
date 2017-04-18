const Types = require('./types');
const Field = require('./field');

function textField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return Field(id, Types.TextType, isRequired, isListField, defaultValue);
}

module.exports = textField;
