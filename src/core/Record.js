const Record = {};
module.exports = Record;

const RecordType = require('./RecordType');

Record.type = RecordType;
Record.id = 'Record';
Record.name = 'Record';
Record.fields = [];
Record.traits = [];
Record.baseType = Record;
Record.isInnerType = false;
