const Fields = {};
module.exports = Fields;

const Types = require('./types');

// Field Builders
const TextField = require('./text-field');
const RecordField = require('./record-field');
const ListField = require('./list-field');
const BooleanField = require('./boolean-field');

// Record Field
Fields.id = TextField('id', { isRequired: true });
Fields.type = RecordField('type', Types.RecordType, { isRequired: true });

// Trait Fields
Fields.module = RecordField('module', Types.Module, { isRequired: true });
Fields.fields = ListField('fields', Types.Field, { isRequired: true });
Fields.traits = ListField('traits', Types.Trait, { defaultValue: [] });

// RecordType Fields
Fields.baseType = RecordField('baseType', Types.RecordType, { defaultValue: Types.Record });
Fields.isInnerType = BooleanField('isInnerType', { defaultValue: false });
Fields.isPrimitiveType = BooleanField('isPrimitiveType', { defaultValue: false });

// Field Fields
Fields.fieldType = RecordField('fieldType', Types.RecordType, { isRequired: true });
Fields.isRequired = BooleanField('isRequired', { defaultValue: false });
Fields.isListField = BooleanField('isListField', { defaultValue: false });
Fields.defaultValue = RecordField('defaultValue', Types.Record);

// Module Fields
Fields.parentModule = RecordField('parentModule', Types.Module, { isRequired: true });
