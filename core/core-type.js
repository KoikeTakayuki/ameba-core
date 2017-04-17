let Record = {},
    Trait = {},
    RecordType = {},
    Field = {},
    Module = {},
    TextType = {},
    NumberType = {},
    BooleanType = {};

module.exports = {
    Record: Record,
    Trait: Trait,
    RecordType: RecordType,
    Field: Field,
    Module: Module,
    TextType: TextType,
    NumberType: NumberType,
    BooleanType: BooleanType
};

TextType._id = 'TextType';
TextType.id = TextType._id;
TextType.type = RecordType;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

NumberType._id = 'NumberType';
NumberType.id = NumberType._id;
NumberType.type = RecordType;
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'BooleanType';
BooleanType.id = BooleanType._id;
BooleanType.type = RecordType;
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

// CoreType Module
let CoreModule = require('./core-module');

// Field Builders
let TextField = require('./text-field'),
    RecordField = require('./record-field'),
    ListField = require('./list-field'),
    NumberField = require('./number-field'),
    BooleanField = require('./boolean-field');

// CoreType Fields
let idField = TextField('id', { isRequired: true }),
    parentModuleField = RecordField('parentModule', Module),
    typeField = RecordField('type', RecordType, { isRequired: true }),
    moduleField = RecordField('module', Module),
    fieldsField = ListField('fields', Field, { isRequired: true }),
    baseTypeField = RecordField('baseType', RecordType),
    traitsField = ListField('traits', Trait),
    isPrimitiveTypeField = BooleanField('isPrimitiveType', { defaultValue: false }),
    isInnerTypeField = BooleanField('isInnerType', { defaultValue: false }),
    fieldTypeField = RecordField('fieldType', RecordType, { isRequired: true }),
    isRequiredField = BooleanField('isRequired', { defaultValue: false }),
    isListField = BooleanField('isListField', { defaultValue: false }),
    defaultValueField = RecordField('defaultValue', Record);

Record._id = 'Record';
Record.id = Record._id;
Record.type = RecordType;
Record.fields = [idField, typeField];
Record.baseType = Record;
Record.module = CoreModule;
Record.traits = [];
Record.isInnerType = false;
Record.isPrimitiveType = false;

Module._id = 'Module';
Module.id = Module._id;
Module.type = RecordType;
Module.module = CoreModule;
Module.fields = [idField, typeField, parentModuleField];
Module.baseType = Record;
Module.traits = [];
Module.isInnerType = false;
Module.isPrimitiveType = false;

Trait._id = 'Trait';
Trait.id = Trait._id;
Trait.type = RecordType;
Trait.module = CoreModule;
Trait.fields = [idField, typeField, moduleField, fieldsField, traitsField];
Trait.baseType = Record;
Trait.traits = [];
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'RecordType';
RecordType.id = RecordType._id;
RecordType.type = RecordType;
RecordType.module = CoreModule;
RecordType.fields = [idField, typeField, moduleField, fieldsField,
    traitsField, baseTypeField, isInnerTypeField, isPrimitiveTypeField];
RecordType.traits = [];
RecordType.baseType = Trait;
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Field';
Field.id = Field._id;
Field.type = RecordType;
Field.module = CoreModule;
Field.fields = [idField, typeField, fieldTypeField, isRequiredField, isListField, defaultValueField];
Field.traits = [];
Field.baseType = Record;
Field.isInnerType = true;
Field.isPrimitiveType = false;