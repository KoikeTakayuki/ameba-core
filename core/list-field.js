let Field = require('./field');

module.exports = function (id, fieldType, args) {
    let isRequired = !!(args && args.isRequired === true),
        isListField = true,
        defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

    return Field(id, fieldType, isRequired, isListField, defaultValue);
};