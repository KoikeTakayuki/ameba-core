const createPrimitiveType = require('../util/createPrimitiveType');

module.exports = {
  Date: createPrimitiveType('Date'),
  Time: createPrimitiveType('Time'),
  DateTime: createPrimitiveType('DateTime'),
};
