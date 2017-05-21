const Types = require('./types');
const trait = require('./trait');

function recordType(id, name, fields, args) {
  const result = trait(id, name, fields, args);
  result.type = Types.RecordType;
  result.baseType = args && args.baseType ? args.baseType : Types.Record;
  result.traits = (args && args.traits) ? args.traits : [];
  result.isInnerType = !!(args && args.isInnerType === true);
  result.isPrimitiveType = !!(args && args.isPrimitiveType === true);

  return result;
}

module.exports = recordType;
