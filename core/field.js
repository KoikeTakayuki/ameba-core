const Core = require('./core');

module.exports = function (id, fieldType, args) {
    return {
        id: id,
        type: Core.Field,
        fieldType: fieldType,
        isRequired: (args && args.isRequired === true),
        isListField: (args && args.isListField === true),
        defaultValue: ((args && args.defaultValue) ? args.defaultValue : undefined)
    };
};