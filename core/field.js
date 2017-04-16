const Core = require('./core');

module.exports = function (id, fieldType, isInnerField, isRequired, isListField, defaultValue) {
    return {
        id: id,
        type: Core.Field,
        fieldType: fieldType,
        isInnerField: isInnerField,
        isRequired: isRequired,
        isListField: isListField,
        defaultValue: defaultValue
    };
};