const Fields = {};
module.exports = Fields;

const Types = require('./types');

// Field Builders
const textField = require('./text-field');
const recordField = require('./record-field');
const listField = require('./list-field');
const booleanField = require('./boolean-field');
const functionField = require('./function-field');

// Record Field
Fields.id = textField('id', { isRequired: true });
Fields.type = recordField('type', Types.RecordType, { isRequired: true });

// Trait Fields
Fields.fields = listField('fields', Types.Field, { isRequired: true });
Fields.traits = listField('traits', Types.Trait, { defaultValue: [] });

// RecordType Fields
Fields.baseType = recordField('baseType', Types.RecordType, { defaultValue: Types.Record });
Fields.isInnerType = booleanField('isInnerType', { defaultValue: false });
Fields.isPrimitiveType = booleanField('isPrimitiveType', { defaultValue: false });

// Field Fields
Fields.fieldType = recordField('fieldType', Types.RecordType, { isRequired: true });
Fields.isRequired = booleanField('isRequired', { defaultValue: false });
Fields.islistField = booleanField('islistField', { defaultValue: false });
Fields.defaultValue = recordField('defaultValue', Types.Record);
Fields.validator = functionField('validator', Types.FunctionType);
