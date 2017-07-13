const Text = require('../type/TextType').Text;
const _ = require('lodash');

const textField = (id, name, args) => {
  const result = { id, name, fieldType: Text };

  return Object.assign(result, _.pick(args, ['fieldType', 'maxLength', 'isRequired', 'isUnique', 'validator']));
};

module.exports = textField;
