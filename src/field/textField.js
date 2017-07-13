const Text = require('../core/TextType').Text;
const _ = require('lodash');

const textField = (id, name, args) => {
  const result = { id, name, fieldType: Text };

  if (!args) {
    return result;
  }

  return Object.assign(result,
    _.pick(args, ['fieldType', 'maxLength', 'isRequired', 'default', 'isUnique', 'validator', 'isListType']));
};

module.exports = textField;
