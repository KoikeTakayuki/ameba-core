const Types = require('./types');
const Field = require('./field');

function BinaryField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return Field(id, Types.BinaryField, isRequired, isListField, defaultValue);
}

module.exports = BinaryField;
