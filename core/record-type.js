const Types = require('./types');
const Trait = require('./trait');

function RecordType(moduleRecord, id, fields, args) {
  const result = Trait(moduleRecord, id, fields, args);
  result.type = Types.RecordType;
  result.baseType = args && args.baseType ? args.baseType : Types.Record;
  result.isInnerType = !!(args && args.isInnerType === true);
  result.isPrimitiveType = !!(args && args.isPrimitiveType === true);

  return result;
}

module.exports = RecordType;
