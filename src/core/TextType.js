const createPrimitiveType = require('../util/createPrimitiveType');

module.exports = {
  Text: createPrimitiveType('Text'),
  LongText: createPrimitiveType('LongText'),
  RichText: createPrimitiveType('RichText'),
};
