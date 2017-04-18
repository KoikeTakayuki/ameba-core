let Types = require('./types');

module.exports = function (id, fieldType, isRequired, isListField, defaultValue) {
    return {
        id: id,
        type: Types.Field,
        fieldType: fieldType,
        isRequired: isRequired,
        isListField: isListField,
        defaultValue: defaultValue
    };
};