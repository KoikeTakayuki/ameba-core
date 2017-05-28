const Types = require('./types');
const field = require('./field');

function dateTimeField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;
  const validator = args && args.validator;

  return field(id, name, Types.DateTimeType, isRequired, isListField,
    false, false, defaultValue, validator);
}

module.exports = dateTimeField;
