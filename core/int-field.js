const Types = require('./types');
const field = require('./field');

function intField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = args && (args.defaultValue !== null || args.defaultValue !== undefined) ?
    args.defaultValue : undefined;
  const validator = args && args.validator;
  const isUnique = args && args.isUnique;
  const autoIncrement = args && args.autoIncrement;

  return field(id, name, Types.IntType, isRequired, isListField,
    isUnique, autoIncrement, defaultValue, validator);
}

module.exports = intField;
