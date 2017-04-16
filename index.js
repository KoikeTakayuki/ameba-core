const Core = require('./core/core')

module.exports = {
    Trait: require('./core/trait'),
    RecordType: require('./core/record-type'),
    Module: require('./core/module'),
    RecordField: require('./core/record-field'),
    ListField: require('./core/list-field'),
    NumberField: require('./core/number-field'),
    BooleanField: require('./core/boolean-field'),
    TextField: require('./core/text-field'),
    TextType: Core.TextType,
    BooleanType: Core.BooleanType,
    NumberType: Core.NumberType,
    MODULE_PATH_SEPARTOR: '.'
};