const Types = require('./types');

function field(id, fieldType, isRequired, isListField, defaultValue) {
  return {
    id,
    type: Types.Field,
    fieldType,
    isRequired,
    isListField,
    defaultValue,
  };
}

module.exports = field;
