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

// Types Module
let coreModule = require('./core-module');

TextType._id = 'TextType';
TextType.id = TextType._id;
TextType.type = RecordType;
TextType.module = coreModule;
TextType.fields = [];
TextType.traits = [];
TextType.baseType = Record;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

NumberType._id = 'NumberType';
NumberType.id = NumberType._id;
NumberType.type = RecordType;
NumberType.module = coreModule;
NumberType.fields = [];
NumberType.traits = [];
NumberType.baseType = Record;
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'BooleanType';
BooleanType.id = BooleanType._id;
BooleanType.type = RecordType;
BooleanType.module = coreModule;
BooleanType.fields = [];
BooleanType.traits = [];
BooleanType.baseType = Record;
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

// Types Fields
let Fields = require('./fields');

Record._id = 'Record';
Record.id = Record._id;
Record.type = RecordType;
Record.module = coreModule;
Record.fields = [Fields.id, Fields.type];
Record.traits = [];
Record.baseType = Record;
Record.isInnerType = false;
Record.isPrimitiveType = false;

Module._id = 'Module';
Module.id = Module._id;
Module.type = RecordType;
Module.module = coreModule;
Module.fields = [Fields.parentModule];
Module.traits = [];
Module.baseType = Record;
Module.isInnerType = false;
Module.isPrimitiveType = false;

Trait._id = 'Trait';
Trait.id = Trait._id;
Trait.type = RecordType;
Trait.module = coreModule;
Trait.fields = [Fields.module, Fields.fields, Fields.traits];
Trait.traits = [];
Trait.baseType = Record;
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'RecordType';
RecordType.id = RecordType._id;
RecordType.type = RecordType;
RecordType.module = coreModule;
RecordType.fields = [Fields.baseType, Fields.isInnerType, Fields.isPrimitiveType];
RecordType.traits = [];
RecordType.baseType = Trait;
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Field';
Field.id = Field._id;
Field.type = RecordType;
Field.module = coreModule;
Field.fields = [Fields.fieldType, Fields.isRequired, Fields.isListField, Fields.defaultValue];
Field.traits = [];
Field.baseType = Record;
Field.isInnerType = true;
Field.isPrimitiveType = false;