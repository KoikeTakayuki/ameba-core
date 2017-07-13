const Text = require('../core/TextType').Text;
const Field = require('../core/Field');
const _ = require('lodash');

const textField = (id, name, args) => {
  const result = { type: Field, id, name, fieldType: Text };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['fieldType', 'maxLength', 'isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = textField;
