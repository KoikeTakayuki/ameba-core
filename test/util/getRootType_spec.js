const should = require('should');
const getRootType = require('../../').util.getRootType;
const core = require('../../').core;

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
});
