const Types = require('./types');
const Field = require('./field');

function FunctionField(id, args) {
  const isRequired = !!(args && args.isRequired === true);
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

  return Field(id, Types.FunctionType, isRequired, false, defaultValue);
}

module.exports = FunctionField;
