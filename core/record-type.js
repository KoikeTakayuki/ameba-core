const Types = require('./types');
const Trait = require('./trait');

module.exports = function (module, id, fields, args) {
    let result = Trait(module, id, fields, args);
    result.type = Types.RecordType;
    result.baseType = !!(args && args.baseType) ? args.baseType : Types.Record;
    result.isInnerType = !!(args && args.isInnerType === true);
    result.isPrimitiveType = !!(args && args.isPrimitiveType === true);;

    return result;
};