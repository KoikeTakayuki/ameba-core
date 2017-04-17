let CoreField = module.exports = {},
    CoreType = require('./core-type');

// Field Builders
let TextField = require('./text-field'),
    RecordField = require('./record-field'),
    ListField = require('./list-field'),
    NumberField = require('./number-field'),
    BooleanField = require('./boolean-field');

// Record Field
CoreField.Id = TextField('id', { isRequired: true });
CoreField.Type = RecordField('type', CoreType.RecordType, { isRequired: true });

// Trait Fields
CoreField.Module = RecordField('module', CoreType.Module, { isRequired: true });
CoreField.Fields = ListField('fields', CoreType.Field, { isRequired: true });
CoreField.Traits = ListField('traits', CoreType.Trait, { defaultValue: [] });

// RecordType Fields
CoreField.BaseType = RecordField('baseType', CoreType.RecordType, { defaultValue: CoreType.Record });
CoreField.IsInnerType = BooleanField('isInnerType', { defaultValue: false });
CoreField.IsPrimitiveType = BooleanField('isPrimitiveType', { defaultValue: false });

// Field Fields
CoreField.FieldType = RecordField('fieldType', CoreType.RecordType, { isRequired: true });
CoreField.IsRequired = BooleanField('isRequired', { defaultValue: false });
CoreField.IsListField = BooleanField('isListField', { defaultValue: false });
CoreField.DefaultValue = RecordField('defaultValue', CoreType.Record);

// Module Fields
CoreField.ParentModule = RecordField('parentModule', CoreType.Module, { isRequired: true });

    