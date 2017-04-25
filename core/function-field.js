const Types = require('./types');
const field = require('./field');

function functionField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return field(id, Types.FunctionType, isRequired, false, defaultValue);
}

module.exports = functionField;
