const Core = require('./core');
const Field = require('./field');

module.exports = function (id, fieldType, args) {
    const isRequired = !!(args && args.isRequired === true)
    const isListField = false;
    const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

    return Field(id, fieldType, isRequired, isListField, defaultValue);
};