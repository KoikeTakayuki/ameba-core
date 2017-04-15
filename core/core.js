const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const Module = {};
const RootModule = {};
const CoreModule = {};
const TextType = 'TextType';
const NumberType = 'NumberType';
const BooleanType = 'BooleanType';
const Core = {
    Record: Record,
    Trait: Trait,
    RecordType: RecordType,
    Field: Field,
    Module: Module,
    RootModule: RootModule,
    TextType: TextType,
    NumberType: NumberType,
    BooleanType: BooleanType
};

module.exports = Core;

RootModule.id = 'Root';
RootModule.type = Module;

CoreModule.id = 'Core';
CoreModule.type = Module;
CoreModule.parentModule = RootModule;


const TextField = require('./text-field');
const RecordField = require('./record-field');
const ListField = require('./list-field');
const NumberField = require('./number-field');
const BooleanField = require('./boolean-field');


const idField = TextField('id', {isRequired: true});
const parentModuleField = RecordField('module', Module);
const typeField = RecordField('type', RecordType, {isRequired: true});
const fieldsField = ListField('fields', Field, {isRequired: true});
const baseTypeField = ListField('baseType', Field, {isRequired: true});

Record.id = 'Record';
Record.type = RecordType;
Record.fields = [idField, typeField];
Record.baseType = Record;
Record.module = CoreModule;

Module.id = 'Module';
Module.type = RecordType;
Module.fields = [idField, parentModuleField];
Module.baseType = Record;
Module.module = CoreModule;

Trait.id = 'Trait';
Trait.type = RecordType;
Trait.fields = [idField, typeField, fieldsField];
Trait.baseType = Record;
Trait.module = CoreModule;

RecordType.id = 'RecordType';
RecordType.type = RecordType;
RecordType.fields = [idField, typeField, fieldsField, baseTypeField];
RecordType.baseType = Trait;
RecordType.module = CoreModule;

Field.id = 'Field';
Field.type = RecordType;
Field.fields = [];
Field.baseType = Record;
Field.module = CoreModule;