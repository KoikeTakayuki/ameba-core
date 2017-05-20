const Types = require('./types');
const field = require('./field');

function dateField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;
  const validator = args && args.validator;

  return field(id, Types.DateType, isRequired, isListField, defaultValue, validator);
}

module.exports = dateField;