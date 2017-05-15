const Types = require('./types');

function field(id, fieldType, isRequired, isListField, defaultValue, validator) {
  return {
    id,
    type: Types.Field,
    fieldType,
    isRequired,
    isListField,
    defaultValue,
    validator,
  };
}

module.exports = field;
