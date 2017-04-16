const Core = require('./core');

module.exports = function (id, fieldType, isRequired, isListField, defaultValue) {
    return {
        id: id,
        type: Core.Field,
        fieldType: fieldType,
        isRequired: isRequired,
        isListField: isListField,
        defaultValue: defaultValue
    };
};