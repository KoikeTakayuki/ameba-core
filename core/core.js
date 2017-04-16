const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const Module = {};
const TextType = {
    id: 'TextType',
    isInnerType: true
};
const NumberType = {
    id: 'NumberType',
    isInnerType: true
};
const BooleanType = {
    id: 'BooleanType',
    isInnerType: true
};

const RootModule = {
    id: 'Root',
    type: Module,
};

const Core = {
    id: 'Core',
    type: Module,
    parentModule: RootModule,
    Record: Record,
    Trait: Trait,
    RecordType: RecordType,
    Field: Field,
    Module: Module,
    TextType: TextType,
    NumberType: NumberType,
    BooleanType: BooleanType
};

module.exports = Core;
RootModule.Core = Core;

const TextField = require('./text-field');
const RecordField = require('./record-field');
const ListField = require('./list-field');
const NumberField = require('./number-field');
const BooleanField = require('./boolean-field');


const idField = TextField('id', {isRequired: true});
const parentModuleField = RecordField('parentModule', Module);
const typeField = RecordField('type', RecordType, {isRequired: true});
const fieldsField = ListField('fields', Field, {isRequired: true});
const baseTypeField = RecordField('baseType', Field);
const traitsField = ListField('traits', Trait);

Record.id = 'Record';
Record.type = RecordType;
Record.fields = [idField, typeField];
Record.baseType = Record;
Record.module = Core;

Module.id = 'Module';
Module.type = RecordType;
Module.fields = [idField, typeField, parentModuleField];
Module.baseType = Record;
Module.module = Core;

Trait.id = 'Trait';
Trait.type = RecordType;
Trait.fields = [idField, typeField, fieldsField, traitsField];
Trait.baseType = Record;
Trait.module = Core;

RecordType.id = 'RecordType';
RecordType.type = RecordType;
RecordType.fields = [idField, typeField, fieldsField, traitsField, baseTypeField];
RecordType.baseType = Trait;
RecordType.module = Core;

Field.id = 'Field';
Field.type = RecordType;
Field.fields = [];
Field.baseType = Record;
Field.module = Core;