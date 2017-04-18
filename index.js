const Types = require('./core/types');
const trait = require('./core/trait');
const recordType = require('./core/record-type');
const module = require('./core/module');
const recordField = require('./core/record-field');
const listField = require('./core/list-field');
const numberField = require('./core/number-field');
const booleanField = require('./core/boolean-field');
const textField = require('./core/text-field');
const rootModule = require('./core/root-module');
const coreModule = require('./core/core-module');

module.exports = {
  Types,
  trait,
  recordType,
  module,
  recordField,
  listField,
  numberField,
  booleanField,
  textField,
  rootModule,
  coreModule,
};
