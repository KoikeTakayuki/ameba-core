const Core = require('./core');
const Field = require('./field');

module.exports = function (id, args) {
    return Field(id, Core.BooleanType, args);
};