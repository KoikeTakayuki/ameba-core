const Core = require('./core');
const Field = require('./field');

module.exports = function (id, fieldType, args) {
    args.isListField = true;
    return Field(id, fieldType, args);
};