const Core = require('./core');
const Field = require('./field');

module.exports = function (id, fieldType, args) {
    const isInnerField = false;
    const isRequired = !!(args && args.isRequired === true)
    const isListField = true;
    const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

    return Field(id, fieldType, isInnerField, isRequired, isListField, defaultValue);
};