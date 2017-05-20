const Types = require('./types');
const recordType = require('./record-type');

function enumerationType(id, values) {
  const result = recordType(id, [], { isPrimitiveType: true, isInnerType: true });
  result.type = Types.EnumerationType;
  result.values = values;

  return result;
}

module.exports = enumerationType;
