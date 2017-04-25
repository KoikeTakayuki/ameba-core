const Types = require('./types');
const field = require('./field');

function binaryField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return field(id, Types.BinaryField, isRequired, isListField, defaultValue);
}

module.exports = binaryField;
