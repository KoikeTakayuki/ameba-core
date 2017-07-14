const getHierarchyFields = require('./util/getHierarchyFields');
const isInstanceOf = require('./util/isInstanceOf');
const _ = require('lodash');

const record = (type, args) => {
  const result = {};
  const fields = getHierarchyFields(type);

  fields.forEach((f) => {
    const fieldId = f.id;

    let fieldValue = args[fieldId];

    if (fieldValue === undefined) {
      if (f.isRequired) {
        throw new Error(`field: ${fieldId} is required, but not given`);
      }

      // set default value if exists
      if (f.default !== undefined) {
        fieldValue = f.defaultValue;
      }
    }

    // type check
    if (_.isNil(fieldValue) && !isInstanceOf(fieldValue, f.fieldType)) {
      const actualType = typeof fieldValue;
      throw new Error(`field type of "${f.id}" is ${f.fieldType.id}, but actual js type is ${actualType}`);
    }

    // validate if validator exists
    if (f.validator) {
      const errorMessage = f.validator(fieldValue);

      if (errorMessage) {
        throw new Error(errorMessage);
      }
    }

    result[fieldId] = fieldValue;
  });

  return result;
};

module.exports = record;
