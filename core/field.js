const Types = require('./types');

function Field(id, fieldType, isRequired, isListField, defaultValue) {
  return {
    id,
    type: Types.Field,
    fieldType,
    isRequired,
    isListField,
    defaultValue,
  };
}

module.exports = Field;
