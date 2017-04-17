const CoreType = require('./core-type');
const Trait = require('./trait');

module.exports = function (module, id, fields, args) {
    let result = Trait(module, id, fields, args);
    result.type = CoreType.RecordType;
    result.baseType = !!(args && args.baseType) ? args.baseType : Core.Record;
    result.isInnerType = !!(args && args.isInnerType === true);
    result.isPrimitiveType = !!(args && args.isPrimitiveType === true);;

    return result;
};