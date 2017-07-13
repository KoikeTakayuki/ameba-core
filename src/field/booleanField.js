const BooleanType = require('../type/BooleanType');
const _ = require('lodash');

const booleanField = (id, name, args) => {
  const result = { id, name, fieldType: BooleanType };

  return Object.assign(result, _.pick(args, ['isRequired']));
};

module.exports = booleanField;
