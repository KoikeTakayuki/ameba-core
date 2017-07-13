const _ = require('lodash');
const core = require('../core');

const Record = core.Record;
const BooleanType = core.BooleanType;
const NumberType = core.NumberType;
const TextType = core.TextType;
const DateType = core.DateType;
const FunctionType = core.FunctionType;

const isInstanceOf = (value, recordType) => {
  if (recordType === BooleanType) {
    return _.isBoolean(value);
  }

  if (recordType === NumberType.Integer) {
    return Number.isInteger(value);
  }

  if (recordType === NumberType.Real) {
    return _.isNumber(value);
  }

  if (recordType === TextType.Text ||
    recordType === TextType.LongText || recordType === TextType.RichText) {
    return _.isString(value);
  }

  if (recordType === DateType.Date ||
    recordType === DateType.Time || recordType === DateType.DateTime) {
    return value instanceof Date;
  }

  if (recordType === FunctionType) {
    return _.isFunction(value);
  }

  let type = value.type;

  while (type !== recordType) {
    if (type === Record) {
      return false;
    }

    type = type.baseType;
  }

  return true;
};

module.exports = isInstanceOf;
