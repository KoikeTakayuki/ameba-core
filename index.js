const Types = require('./core/types');
const Fields = require('./core/fields');
const Trait = require('./core/trait');
const RecordType = require('./core/record-type');
const Module = require('./core/module');
const RecordField = require('./core/record-field');
const ListField = require('./core/list-field');
const NumberField = require('./core/number-field');
const BooleanField = require('./core/boolean-field');
const TextField = require('./core/text-field');
const rootModule = require('./core/root-module');
const coreModule = require('./core/core-module');

module.exports = {
  Types,
  Fields,
  Trait,
  RecordType,
  Module,
  RecordField,
  ListField,
  NumberField,
  BooleanField,
  TextField,
  rootModule,
  coreModule,
};
