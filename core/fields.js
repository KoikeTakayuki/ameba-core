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
Fields.id = textField('id', 'ID', { isRequired: true });
Fields.type = recordField('type', 'タイプ', Types.RecordType, { isRequired: true });

// Trait Fields
Fields.name = textField('name');
Fields.fields = listField('fields', 'フィールド', Types.Field, { isRequired: true });

// RecordType Fields
Fields.baseType = recordField('baseType', 'ベースタイプ', Types.RecordType, { defaultValue: Types.Record });
Fields.traits = listField('traits', 'トレイト', Types.Trait, { defaultValue: [] });
Fields.isInnerType = booleanField('isInnerType', '内部レコード', { defaultValue: false });
Fields.isPrimitiveType = booleanField('isPrimitiveType', '基本レコード', { defaultValue: false });

// Field Fields
Fields.fieldType = recordField('fieldType', 'フィールドタイプ', Types.RecordType, { isRequired: true });
Fields.isRequired = booleanField('isRequired', '必須フィールド', { defaultValue: false });
Fields.isListField = booleanField('isListField', 'リストフィールド', { defaultValue: false });
Fields.isUnique = booleanField('isUnique', 'ユニーク', { defaultValue: false });
Fields.autoIncrement = booleanField('autoIncrement', 'オート', { defaultValue: false });
Fields.defaultValue = recordField('defaultValue', 'デフォルト値', Types.FunctionType);
Fields.validator = functionField('validator', 'バリデーター', Types.FunctionType);

// EnumerationType Fields
Fields.valuesField = listField('values', '値', Types.TextType);
