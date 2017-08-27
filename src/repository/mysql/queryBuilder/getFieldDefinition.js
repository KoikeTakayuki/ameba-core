const core = require('../../../core');
const _ = require('lodash');

const getTextFieldDefinition = (textField) => {
  let result = `${textField.id} VARCHAR(${textField.maxLength})`;

  if (_.isString(textField.default)) {
    result += ` DEFAULT '${textField.default}'`;
  }

  return result;
};

const getIntegerFieldDefinition = (integerField) => {
  let result = `${integerField.id} INT`;

  if (_.isInteger(integerField.default)) {
    result += ` DEFAULT ${integerField.default}`;
  } else if (integerField.isAutoIncrement) {
    result += ' AUTO_INCREMENT';
  } else if (integerField.isUnique) {
    result += ' UNIQUE';
  }

  return result;
};

const getNumberFieldDefinition = (numberField) => {
  let result = `${numberField.id} DOUBLE`;

  if (_.isNumber(numberField.default)) {
    result += ` DEFAULT ${numberField.default}`;
  }

  return result;
};

const getBooleanFieldDefinition = (booleanField) => {
  let result = `${booleanField.id} BOOLEAN`;

  if (_.isBoolean(booleanField.default)) {
    result += ` DEFAULT ${booleanField.default ? 'TRUE' : 'FALSE'}`;
  }

  return result;
};

const getDateTimeFieldDefinition = (dateTimeField) => {
  let result = `${dateTimeField.id} DATETIME`;

  if (dateTimeField.defaultCurrentTimeOnCreate) {
    result += ' NOT NULL DEFAULT CURRENT_TIMESTAMP';
  } else if (dateTimeField.defaultCurrentTimeOnCreate) {
    result += ' NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP';
  }

  return result;
};

const getFieldDefinition = (field) => {
  const fieldType = field.fieldType;

  switch (fieldType) {
    case core.Text:
      return getTextFieldDefinition(field);
    case core.Integer:
      return getIntegerFieldDefinition(field);
    case core.Number:
      return getNumberFieldDefinition(field);
    case core.Boolean:
      return getBooleanFieldDefinition(field);
    case core.DateTime:
      return getDateTimeFieldDefinition(field);
    default:
      return null;
  }
};


module.exports = getFieldDefinition;
