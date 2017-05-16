const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const TextType = {};
const NumberType = {};
const BooleanType = {};
const DateType = {};
const FunctionType = {};
const BinaryType = {};

module.exports = {
  Record,
  Trait,
  RecordType,
  Field,
  TextType,
  NumberType,
  BooleanType,
  DateType,
  FunctionType,
  BinaryType,
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
NumberType.baseType = Record;
NumberType.traits = [];
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'Core.BooleanType';
BooleanType.id = BooleanType._id;
BooleanType.type = RecordType;
BooleanType.fields = [];
BooleanType.baseType = Record;
BooleanType.traits = [];
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

DateType._id = 'Core.DateType';
DateType.id = DateType._id;
DateType.type = RecordType;
DateType.fields = [];
DateType.baseType = Record;
DateType.traits = [];
DateType.isPrimitiveType = true;
DateType.isInnerType = true;

FunctionType._id = 'Core.FunctionType';
FunctionType.id = FunctionType._id;
FunctionType.type = RecordType;
FunctionType.fields = [];
FunctionType.baseType = Record;
FunctionType.traits = [];
FunctionType.isPrimitiveType = true;
FunctionType.isInnerType = true;

BinaryType._id = 'Core.BinaryType';
BinaryType.id = BinaryType._id;
BinaryType.type = RecordType;
BinaryType.fields = [];
BinaryType.baseType = Record;
BinaryType.traits = [];
BinaryType.isPrimitiveType = true;
BinaryType.isInnerType = true;


// Types Fields
const Fields = require('./fields');

Record._id = 'Core.Record';
Record.id = Record._id;
Record.type = RecordType;
Record.fields = [Fields.type];
Record.baseType = Record;
Record.traits = [];
Record.isInnerType = false;
Record.isPrimitiveType = false;

Trait._id = 'Core.Trait';
Trait.id = Trait._id;
Trait.type = RecordType;
Trait.fields = [Fields.id, Fields.fields];
Trait.baseType = Record;
Trait.traits = [];
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'Core.RecordType';
RecordType.id = RecordType._id;
RecordType.type = RecordType;
RecordType.fields = [Fields.baseType, Fields.traits, Fields.isInnerType, Fields.isPrimitiveType];
RecordType.baseType = Trait;
RecordType.traits = [];
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Core.Field';
Field.id = Field._id;
Field.type = RecordType;
Field.fields = [Fields.id, Fields.fieldType, Fields.isRequired,
  Fields.isListField, Fields.defaultValue, Fields.validator];
Field.baseType = Record;
Field.traits = [];
Field.isInnerType = true;
Field.isPrimitiveType = false;
