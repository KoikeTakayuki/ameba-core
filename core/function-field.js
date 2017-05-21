const Types = require('./types');
const field = require('./field');

function functionField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, name, Types.FunctionType, isRequired, false, defaultValue, validator);
}

module.exports = functionField;
