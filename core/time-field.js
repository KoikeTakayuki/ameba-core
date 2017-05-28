const Types = require('./types');
const field = require('./field');

function timeField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && args.defaultValue;
  const validator = args && args.validator;

  return field(id, name, Types.TimeType, isRequired, isListField,
    false, false, defaultValue, validator);
}

module.exports = timeField;
