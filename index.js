const CoreModule = require('./core/core')

module.exports = {
    Trait: require('./core/trait'),
    RecordType: require('./core/record-type'),
    RecordField: require('./core/record-field'),
    ListField: require('./core/list-field'),
    NumberField: require('./core/number-field'),
    BooleanField: require('./core/boolean-field'),
    TextField: require('./core/text-field'),
    TextType: CoreModule.TextType,
    BooleanType: CoreModule.BooleanType,
    NumberType: CoreModule.NumberType,
};