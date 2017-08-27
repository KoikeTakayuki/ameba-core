const Text = require('../core/TextType');
const Field = require('../core/Field');
const DEFAULT_MAX_TEXT_LENGTH = require('../constants').DEFAULT_MAX_TEXT_LENGTH;

const _ = require('lodash');

const textField = (id, name, args) => {
  const result = {
    type: Field,
    id,
    name,
    fieldType: Text,
    maxLength: DEFAULT_MAX_TEXT_LENGTH,
    isRequired: false,
    default: '',
    isUnique: false,
    validator: null,
    isListType: false,
  };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['fieldType', 'maxLength', 'isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = textField;
