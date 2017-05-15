const Types = require('./types');
const field = require('./field');

function functionField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, Types.FunctionType, isRequired, false, defaultValue, validator);
}

module.exports = functionField;
