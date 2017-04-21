const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const TextType = {};
const NumberType = {};
const BooleanType = {};

module.exports = {
  Record,
  Trait,
  RecordType,
  Field,
  TextType,
  NumberType,
  BooleanType,
};

TextType._id = 'Core.TextType';
TextType.id = TextType._id;
TextType.type = RecordType;
TextType.fields = [];
TextType.traits = [];
TextType.baseType = Record;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

NumberType._id = 'Core.NumberType';
NumberType.id = NumberType._id;
NumberType.type = RecordType;
NumberType.fields = [];
NumberType.traits = [];
NumberType.baseType = Record;
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'Core.BooleanType';
BooleanType.id = BooleanType._id;
BooleanType.type = RecordType;
BooleanType.fields = [];
BooleanType.traits = [];
BooleanType.baseType = Record;
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

// Types Fields
const Fields = require('./fields');

Record._id = 'Core.Record';
Record.id = Record._id;
Record.type = RecordType;
Record.fields = [Fields.id, Fields.type];
Record.traits = [];
Record.baseType = Record;
Record.isInnerType = false;
Record.isPrimitiveType = false;

Trait._id = 'Core.Trait';
Trait.id = Trait._id;
Trait.type = RecordType;
Trait.fields = [Fields.fields, Fields.traits];
Trait.traits = [];
Trait.baseType = Record;
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'Core.RecordType';
RecordType.id = RecordType._id;
RecordType.type = RecordType;
RecordType.fields = [Fields.baseType, Fields.isInnerType, Fields.isPrimitiveType];
RecordType.traits = [];
RecordType.baseType = Trait;
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Core.Field';
Field.id = Field._id;
Field.type = RecordType;
Field.fields = [Fields.fieldType, Fields.isRequired, Fields.isListField, Fields.defaultValue];
Field.traits = [];
Field.baseType = Record;
Field.isInnerType = true;
Field.isPrimitiveType = false;
