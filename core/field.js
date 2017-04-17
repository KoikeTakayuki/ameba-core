let CoreType = require('./core-type');

module.exports = function (id, fieldType, isRequired, isListField, defaultValue) {
    return {
        id: id,
        type: CoreType.Field,
        fieldType: fieldType,
        isRequired: isRequired,
        isListField: isListField,
        defaultValue: defaultValue
    };
};