const Types = require('./types');
const field = require('./field');

function richTextField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, name, Types.RichTextType, isRequired, isListField,
    false, false, defaultValue, validator);
}

module.exports = richTextField;
