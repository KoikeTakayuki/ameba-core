const Record = {};
const Trait = {};
const RecordType = {};
const Field = {};
const TextType = {};
const LongTextType = {};
const RichTextType = {};
const NumberType = {};
const IntType = {};
const BooleanType = {};
const DateType = {};
const TimeType = {};
const DateTimeType = {};
const FunctionType = {};
const BinaryType = {};
const EnumerationType = {};

module.exports = {
  Record,
  Trait,
  RecordType,
  Field,
  TextType,
  LongTextType,
  RichTextType,
  NumberType,
  IntType,
  BooleanType,
  DateType,
  TimeType,
  DateTimeType,
  FunctionType,
  BinaryType,
  EnumerationType,
};

TextType.type = RecordType;
TextType.id = 'Core.TextType';
TextType.name = TextType.id;
TextType.fields = [];
TextType.traits = [];
TextType.baseType = Record;
TextType.isPrimitiveType = true;
TextType.isInnerType = true;

LongTextType.type = RecordType;
LongTextType.id = 'Core.LongTextType';
LongTextType.name = LongTextType.id;
LongTextType.fields = [];
LongTextType.traits = [];
LongTextType.baseType = Record;
LongTextType.isPrimitiveType = true;
LongTextType.isInnerType = true;

RichTextType.type = RecordType;
RichTextType.id = 'Core.RichTextType';
RichTextType.name = RichTextType.id;
RichTextType.fields = [];
RichTextType.traits = [];
RichTextType.baseType = Record;
RichTextType.isPrimitiveType = true;
RichTextType.isInnerType = true;

NumberType.type = RecordType;
NumberType.id = 'Core.NumberType';
NumberType.name = NumberType.id;
NumberType.fields = [];
NumberType.baseType = Record;
NumberType.traits = [];
NumberType.isPrimitiveType = true;
NumberType.isInnerType = true;

IntType.type = RecordType;
IntType.id = 'Core.IntType';
IntType.name = IntType.id;
IntType.fields = [];
IntType.baseType = Record;
IntType.traits = [];
IntType.isPrimitiveType = true;
IntType.isInnerType = true;

BooleanType.type = RecordType;
BooleanType.id = 'Core.BooleanType';
BooleanType.name = BooleanType.id;
BooleanType.fields = [];
BooleanType.baseType = Record;
BooleanType.traits = [];
BooleanType.isPrimitiveType = true;
BooleanType.isInnerType = true;

DateType.type = RecordType;
DateType.id = 'Core.DateType';
DateType.name = DateType.id;
DateType.fields = [];
DateType.baseType = Record;
DateType.traits = [];
DateType.isPrimitiveType = true;
DateType.isInnerType = true;

TimeType.type = RecordType;
TimeType.id = 'Core.TimeType';
TimeType.name = TimeType.id;
TimeType.fields = [];
TimeType.baseType = Record;
TimeType.traits = [];
TimeType.isPrimitiveType = true;
TimeType.isInnerType = true;

DateTimeType.type = RecordType;
DateTimeType.id = 'Core.DateTimeType';
DateTimeType.name = TimeType.id;
DateTimeType.fields = [];
DateTimeType.baseType = Record;
DateTimeType.traits = [];
DateTimeType.isPrimitiveType = true;
DateTimeType.isInnerType = true;

FunctionType.type = RecordType;
FunctionType.id = 'Core.FunctionType';
FunctionType.name = FunctionType.id;
FunctionType.fields = [];
FunctionType.baseType = Record;
FunctionType.traits = [];
FunctionType.isPrimitiveType = true;
FunctionType.isInnerType = true;

BinaryType.type = RecordType;
BinaryType.id = 'Core.BinaryType';
BinaryType.name = BinaryType.id;
BinaryType.fields = [];
BinaryType.baseType = Record;
BinaryType.traits = [];
BinaryType.isPrimitiveType = true;
BinaryType.isInnerType = true;


// Types Fields
const Fields = require('./fields');

Record.type = RecordType;
Record.id = 'Core.Record';
Record.name = Record.id;
Record.fields = [Fields.type];
Record.baseType = Record;
Record.traits = [];
Record.isInnerType = false;
Record.isPrimitiveType = false;

Trait.type = RecordType;
Trait.id = 'Core.Trait';
Trait.name = Trait.id;
Trait.fields = [Fields.id, Fields.name, Fields.fields];
Trait.baseType = Record;
Trait.traits = [];
Trait.isInnerType = false;
Trait.isPrimitiveType = false;

RecordType.type = RecordType;
RecordType.id = 'Core.RecordType';
RecordType.name = RecordType.id;
RecordType.fields = [Fields.baseType, Fields.traits, Fields.isInnerType, Fields.isPrimitiveType];
RecordType.baseType = Trait;
RecordType.traits = [];
RecordType.isInnerType = false;
RecordType.isPrimitiveType = false;

Field.type = RecordType;
Field.id = 'Core.Field';
Field.name = Field.id;
Field.fields = [Fields.id, Fields.name, Fields.fieldType, Fields.isRequired,
  Fields.isListField, Fields.isUnique, Fields.autoIncrement, Fields.defaultValue, Fields.validator];
Field.baseType = Record;
Field.traits = [];
Field.isInnerType = true;
Field.isPrimitiveType = false;

EnumerationType.type = RecordType;
EnumerationType.id = 'Core.EnumerationType';
EnumerationType.name = EnumerationType.id;
EnumerationType.fields = [Fields.valuesField];
EnumerationType.baseType = RecordType;
EnumerationType.traits = [];
EnumerationType.isInnerType = true;
EnumerationType.isPrimitiveType = true;
