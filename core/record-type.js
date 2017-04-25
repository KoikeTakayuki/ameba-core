const Types = require('./types');
const trait = require('./trait');

function recordType(id, fields, args) {
  const result = trait(id, fields, args);
  result.type = Types.RecordType;
  result.baseType = args && args.baseType ? args.baseType : Types.Record;
  result.isInnerType = !!(args && args.isInnerType === true);
  result.isPrimitiveType = !!(args && args.isPrimitiveType === true);

  return result;
}

module.exports = recordType;
