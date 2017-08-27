const _ = require('lodash');

const getRecordTableName = require('./getRecordTableName');
const getFieldDefinition = require('./getFieldDefinition');
const getHierarchyFields = require('../../../util/getHierarchyFields');

const getFieldDefinitions = fields => _.reduce(fields, (result, f) => {
  const fieldDefinition = getFieldDefinition(f);
  if (fieldDefinition !== null) {
    result.push(fieldDefinition);
  }
  return result;
}, []);

const FIELD_DEFINITION_SEPARATOR = ',';

const buildRecordTableQuery = (recordType) => {
  const tableName = getRecordTableName(recordType);
  const fields = getHierarchyFields(recordType);
  const fieldDefinitions = getFieldDefinitions(fields);

  return `CREATE TABLE IF NOT EXISTS ${tableName} (` +
    '_uid INTEGER NOT NULL AUTO_INCREMENT,' +
    `${fieldDefinitions.join(FIELD_DEFINITION_SEPARATOR)}, PRIMARY KEY(_uid))`;
};

module.exports = buildRecordTableQuery;
