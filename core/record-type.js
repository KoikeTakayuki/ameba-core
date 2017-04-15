const Core = require('./core');
const Trait = require('./trait');

module.exports = function (module, id, fields, args) {
    const result = Trait(module, id, fields, args);
    result.type = Core.RecordType;

    return result;
};