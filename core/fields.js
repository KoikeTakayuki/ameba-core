let Fields = module.exports = {},
    Types = require('./types');

// Field Builders
let textField = require('./text-field'),
    recordField = require('./record-field'),
    listField = require('./list-field'),
    numberField = require('./number-field'),
    booleanField = require('./boolean-field');

// Record Field
Fields.id = textField('id', { isRequired: true });
Fields.type = recordField('type', Types.RecordType, { isRequired: true });

// Trait Fields
Fields.module = recordField('module', Types.Module, { isRequired: true });
Fields.fields = listField('fields', Types.Field, { isRequired: true });
Fields.traits = listField('traits', Types.Trait, { defaultValue: [] });

// RecordType Fields
Fields.baseType = recordField('baseType', Types.RecordType, { defaultValue: Types.Record });
Fields.isInnerType = booleanField('isInnerType', { defaultValue: false });
Fields.isPrimitiveType = booleanField('isPrimitiveType', { defaultValue: false });

// Field Fields
Fields.fieldType = recordField('fieldType', Types.RecordType, { isRequired: true });
Fields.isRequired = booleanField('isRequired', { defaultValue: false });
Fields.isListField = booleanField('isListField', { defaultValue: false });
Fields.defaultValue = recordField('defaultValue', Types.Record);

// Module Fields
Fields.parentModule = recordField('parentModule', Types.Module, { isRequired: true });