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
const EnumerationType = {};

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
  EnumerationType,
};

TextType._id = 'Core.TextType';
TextType.type = RecordType;
TextType.id = TextType._id;
TextType.name = TextType._id;
TextType.fields = [];
TextType.traits = [];
TextType.baseType = Record;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

NumberType._id = 'Core.NumberType';
NumberType.type = RecordType;
NumberType.id = NumberType._id;
NumberType.name = NumberType._id;
NumberType.fields = [];
NumberType.baseType = Record;
NumberType.traits = [];
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

BooleanType._id = 'Core.BooleanType';
BooleanType.type = RecordType;
BooleanType.id = BooleanType._id;
BooleanType.name = BooleanType._id;
BooleanType.fields = [];
BooleanType.baseType = Record;
BooleanType.traits = [];
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

DateType._id = 'Core.DateType';
DateType.type = RecordType;
DateType.id = DateType._id;
DateType.name = DateType._id;
DateType.fields = [];
DateType.baseType = Record;
DateType.traits = [];
DateType.isPrimitiveType = true;
DateType.isInnerType = true;

FunctionType._id = 'Core.FunctionType';
FunctionType.type = RecordType;
FunctionType.id = FunctionType._id;
FunctionType.name = FunctionType._id;
FunctionType.fields = [];
FunctionType.baseType = Record;
FunctionType.traits = [];
FunctionType.isPrimitiveType = true;
FunctionType.isInnerType = true;

BinaryType._id = 'Core.BinaryType';
BinaryType.type = RecordType;
BinaryType.id = BinaryType._id;
BinaryType.name = BinaryType._id;
BinaryType.fields = [];
BinaryType.baseType = Record;
BinaryType.traits = [];
BinaryType.isPrimitiveType = true;
BinaryType.isInnerType = true;


// Types Fields
const Fields = require('./fields');

Record._id = 'Core.Record';
Record.type = RecordType;
Record.id = Record._id;
Record.name = Record._id;
Record.fields = [Fields.type];
Record.baseType = Record;
Record.traits = [];
Record.isInnerType = false;
Record.isPrimitiveType = false;

Trait._id = 'Core.Trait';
Trait.type = RecordType;
Trait.id = Trait._id;
Trait.name = Trait._id;
Trait.fields = [Fields.id, Fields.name, Fields.fields];
Trait.baseType = Record;
Trait.traits = [];
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType._id = 'Core.RecordType';
RecordType.type = RecordType;
RecordType.id = RecordType._id;
RecordType.name = RecordType._id;
RecordType.fields = [Fields.baseType, Fields.traits, Fields.isInnerType, Fields.isPrimitiveType];
RecordType.baseType = Trait;
RecordType.traits = [];
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field._id = 'Core.Field';
Field.type = RecordType;
Field.id = Field._id;
Field.name = Field._id;
Field.fields = [Fields.id, Fields.name, Fields.fieldType, Fields.isRequired,
  Fields.isListField, Fields.defaultValue, Fields.validator];
Field.baseType = Record;
Field.traits = [];
Field.isInnerType = true;
Field.isPrimitiveType = false;

EnumerationType._id = 'Core.EnumerationType';
EnumerationType.type = RecordType;
EnumerationType.id = EnumerationType._id;
EnumerationType.name = EnumerationType._id;
EnumerationType.fields = [Fields.valuesField];
EnumerationType.baseType = RecordType;
EnumerationType.traits = [];
EnumerationType.isInnerType = true;
EnumerationType.isPrimitiveType = true;
