const Types = require('./types');
const field = require('./field');

function binaryField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, Types.BinaryType, isRequired, isListField, defaultValue, validator);
}

module.exports = binaryField;
