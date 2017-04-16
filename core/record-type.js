const Core = require('./core');
const Trait = require('./trait');

module.exports = function (module, id, fields, args) {
    const result = Trait(module, id, fields, args);
    result.type = Core.RecordType;
    result.baseType = (args && args.baseType) ? args.baseType : Core.Record;
    result.isInnerType = (args && args.isInnerType === true);

    return result;
};