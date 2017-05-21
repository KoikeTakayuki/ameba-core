const Types = require('./types');
const recordType = require('./record-type');

function enumerationType(id, name, values) {
  const result = recordType(id, name, [], { isPrimitiveType: true, isInnerType: true });
  result.type = Types.EnumerationType;
  result.values = values;

  return result;
}

module.exports = enumerationType;
