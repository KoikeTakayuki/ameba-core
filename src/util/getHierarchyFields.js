const Record = require('../core').Record;
const _ = require('lodash');

const getHierarchyFields = (recordType) => {
  if (recordType === Record) {
    return Record.fields;
  }

  const fields = recordType.fields;
  const traitFields = _.flatMap(recordType.traits, _.property('fields'));
  const baseTypeFields = getHierarchyFields(recordType.baseType);

  return baseTypeFields.concat(fields, traitFields);
};

module.exports = getHierarchyFields;
