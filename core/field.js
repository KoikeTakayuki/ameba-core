const Types = require('./types');

function field(id, name, fieldType, isRequired, isListField, defaultValue, validator) {
  return {
    id,
    name,
    type: Types.Field,
    fieldType,
    isRequired,
    isListField,
    defaultValue,
    validator,
  };
}

module.exports = field;
