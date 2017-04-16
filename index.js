const CoreModule = require('./core/core')

module.exports = {
    Trait: require('./core/trait'),
    RecordType: require('./core/record-type'),
    Module: require('./core/module'),
    RecordField: require('./core/record-field'),
    ListField: require('./core/list-field'),
    InnerRecordField: require('./core/inner-record-field'),
    NumberField: require('./core/number-field'),
    BooleanField: require('./core/boolean-field'),
    TextField: require('./core/text-field'),
    TextType: CoreModule.TextType,
    BooleanType: CoreModule.BooleanType,
    NumberType: CoreModule.NumberType,
    MODULE_PATH_SEPARTOR: '.'
};