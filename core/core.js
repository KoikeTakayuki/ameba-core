const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const Module = {};
const TextType = {
    id: 'TextType',
    isPrimitiveType: true,
    isInnerType: true
};
const NumberType = {
    id: 'NumberType',
    isPrimitiveType: true,
    isInnerType: true
};
const BooleanType = {
    id: 'BooleanType',
    isPrimitiveType: true,
    isInnerType: true
};

const RootModule = {
    id: 'Root',
    type: Module,
};

const CoreModule = {
    id: 'Core',
    type: Module,
    parentModule: RootModule,
};

const Core = {
    CoreModule: CoreModule,
    RootModule: RootModule,
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
Record.traits = [];
Record._id = Record.id;

Module.id = 'Module';
Module.type = RecordType;
Module.fields = [idField, typeField, parentModuleField];
Module.baseType = Record;
Module.module = Core;
Module._id = Module.id;

Trait.id = 'Trait';
Trait.type = RecordType;
Trait.fields = [idField, typeField, fieldsField, traitsField];
Trait.baseType = Record;
Trait.module = Core;
Trait.traits = [];
Trait._id = Trait.id;

RecordType.id = 'RecordType';
RecordType.type = RecordType;
RecordType.fields = [idField, typeField, fieldsField, traitsField, baseTypeField];
RecordType.baseType = Trait;
RecordType.module = Core;
RecordType.traits = [];
RecordType._id = RecordType.id;

Field.id = 'Field';
Field.type = RecordType;
Field.fields = [];
Field.baseType = Record;
Field.module = Core;
Field._id = Field.id;