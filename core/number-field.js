let CoreType = require('./core-type'),
    Field = require('./field');

module.exports = function (id, args) {
    let isRequired = !!(args && args.isRequired === true),
        isListField = false;
        defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);

    return Field(id, CoreType.NumberType, isRequired, isListField, defaultValue);
};