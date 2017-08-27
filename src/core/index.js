const Record = require('./Record');
const RecordType = require('./RecordType');
const Trait = require('./Trait');
const Field = require('./Field');
const Text = require('./Text');
const IntegerType = require('./Integer');
const NumberType = require('./Number');
const BooleanType = require('./Boolean');
const DateTimeType = require('./DateTime');
const FunctionType = require('./Function');

module.exports = {
  Record,
  RecordType,
  Trait,
  Field,
  Text,
  Integer: IntegerType,
  Number: NumberType,
  Boolean: BooleanType,
  DateTime: DateTimeType,
  Function: FunctionType,
};
