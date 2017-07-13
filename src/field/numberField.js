const Real = require('../core/NumberType').Real;
const _ = require('lodash');

const numberField = (id, name, args) => {
  const result = { id, name, fieldType: Real };

  return Object.assign(result, _.pick(args, ['fieldType', 'isRequired', 'isUnique', 'validator']));
};

module.exports = numberField;
