const Types = require('./types');
const field = require('./field');

function enumerationField(id, values, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;
  const validator = v => values.indexOf(v) > -1;

  if (defaultValue && !validator(defaultValue)) {
    throw new Error('invalid defaultValue given');
  }

  return field(id, Types.TextType, isRequired, isListField, defaultValue, validator);
}

module.exports = enumerationField;
