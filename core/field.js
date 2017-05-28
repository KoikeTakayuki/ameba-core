const Types = require('./types');

function field(id, name, fieldType, isRequired,
  isListField, isUnique, autoIncrement, defaultValue, validator) {
  return {
    id,
    name,
    type: Types.Field,
    fieldType,
    isRequired,
    isListField,
    isUnique,
    autoIncrement,
    defaultValue,
    validator,
  };
}

module.exports = field;
