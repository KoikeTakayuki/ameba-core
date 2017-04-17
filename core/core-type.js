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

// CoreType Module
let CoreModule = require('./core-module');

TextType._id = 'TextType';
TextType.id = TextType._id;
TextType.type = RecordType;
TextType.module = CoreModule;
TextType.fields = [];
TextType.traits = [];
TextType.baseType = Record;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

NumberType._id = 'NumberType';
NumberType.id = NumberType._id;
NumberType.type = RecordType;
NumberType.module = CoreModule;
NumberType.fields = [];
NumberType.traits = [];
NumberType.baseType = Record;
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'BooleanType';
BooleanType.id = BooleanType._id;
BooleanType.type = RecordType;
BooleanType.module = CoreModule;
BooleanType.fields = [];
BooleanType.traits = [];
BooleanType.baseType = Record;
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

// CoreType Fields
let CoreField = require('./core-field');

Record._id = 'Record';
Record.id = Record._id;
Record.type = RecordType;
Record.module = CoreModule;
Record.fields = [CoreField.ID, CoreField.Type];
Record.traits = [];
Record.baseType = Record;
Record.isInnerType = false;
Record.isPrimitiveType = false;

Module._id = 'Module';
Module.id = Module._id;
Module.type = RecordType;
Module.module = CoreModule;
Module.fields = [CoreField.ID, CoreField.Type, CoreField.ParentModule];
Module.traits = [];
Module.baseType = Record;
Module.isInnerType = false;
Module.isPrimitiveType = false;

Trait._id = 'Trait';
Trait.id = Trait._id;
Trait.type = RecordType;
Trait.module = CoreModule;
Trait.fields = [CoreField.ID, CoreField.Type, CoreField.Module, CoreField.Fields, CoreField.Traits];
Trait.traits = [];
Trait.baseType = Record;
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'RecordType';
RecordType.id = RecordType._id;
RecordType.type = RecordType;
RecordType.module = CoreModule;
RecordType.fields = [CoreField.ID, CoreField.Type, CoreField.Module, CoreField.Fields, CoreField.Traits,
    CoreField.BaseType, CoreField.IsInnerType, CoreField.IsPrimitiveType];
RecordType.traits = [];
RecordType.baseType = Trait;
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Field';
Field.id = Field._id;
Field.type = RecordType;
Field.module = CoreModule;
Field.fields = [CoreField.ID, CoreField.Type, CoreField.FieldType, CoreField.IsRequired, CoreField.IsListField, CoreField.DefaultValue];
Field.traits = [];
Field.baseType = Record;
Field.isInnerType = true;
Field.isPrimitiveType = false;