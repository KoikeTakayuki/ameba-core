const RecordType = {};
module.exports = RecordType;

const Record = require('./Record');
const Trait = require('./Trait');
const field = require('../field');

const recordField = field.recordField;
const booleanField = field.booleanField;

RecordType.type = RecordType;
RecordType.id = 'RecordType';
RecordType.name = 'RecordType';
RecordType.fields = [
  recordField('traits', 'traits', Trait, { isListType: true }),
  recordField('baseType', 'baseType', RecordType, { default: Record }),
  booleanField('isInnerType', 'baseType', { default: false }),
];
RecordType.traits = [];
RecordType.baseType = Trait;
RecordType.isInnerType = false;
