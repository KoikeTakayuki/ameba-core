const Trait = {};
module.exports = Trait;

const Record = require('./Record');
const RecordType = require('./RecordType');
const Field = require('./Field');
const field = require('../field');

const textField = field.textField;
const recordField = field.recordField;

Trait.type = RecordType;
Trait.id = 'Core.Trait';
Trait.name = 'Trait';
Trait.fields = [
  textField('id', 'ID', { isRequired: true, isUnique: true }),
  textField('name', 'Name', { isRequired: true }),
  recordField('fields', 'fields', Field, { isRequired: true, isListType: true }),
];
Trait.traits = [];
Trait.baseType = Record;
Trait.isInnerType = false;
