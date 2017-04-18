let Types = require('./types')
    field = require('./field');

module.exports = function (id, args) {
    let isRequired = !!(args && args.isRequired === true),
        isListField = false,
        defaultValue = args && args.defaultValue;

    return field(id, Types.BooleanType, isRequired, isListField, defaultValue);
};