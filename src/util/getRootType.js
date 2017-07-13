const Record = require('../core').Record;

const getRootType = (recordType) => {
  if (recordType.baseType === Record) {
    return recordType;
  }

  return getRootType(recordType.baseType);
};

module.exports = getRootType;
