const should = require('should');
const getRootType = require('../../').util.getRootType;
const core = require('../../').core;
const recordType = require('../../').recordType;

describe('getRootType', function () {
  it('should return Record when Record given', function () {
    getRootType(core.Record).should.be.equal(core.Record);
  });

  it('should return Trait when Trait given', function () {
    getRootType(core.Trait).should.be.equal(core.Trait);
  });

  it('should return Trait when RecordType given', function () {
    getRootType(core.RecordType).should.be.equal(core.Trait);
  });

  it('should return all fields of given recordType, its traits and baseType ', function () {
    const testRecordType1 = recordType('a', 'a', []);
    const testRecordType2 = recordType('b', 'b', [], { baseType: testRecordType1 });
    const testRecordType3 = recordType('c', 'c', [], { baseType: testRecordType2 });
    getRootType(testRecordType3).should.be.equal(testRecordType1);
  });
});
