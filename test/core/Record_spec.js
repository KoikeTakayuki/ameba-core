const should = require('should');
const Record = require('../../').core.Record;
const RecordType = require('../../').core.RecordType;

describe('Record', function () {
  it('should be an Object', function () {
    Record.should.be.an.Object();
  });

  it('should have 7 properties', function () {
    Object.keys(Record).should.have.length(7);
  });

  it('should have keys ["type", "id", "name", "fields", "traits", "baseType", "isInnerType"]', function () {
    Record.should.have.keys('type', 'id', 'name', 'fields', 'traits', 'baseType', 'isInnerType');
  });

  it('should have RecordType as its type', function () {
    Record.should.have.property('type', RecordType);
  });

  it('should have an empty array as its fields', function () {
    Record.fields.should.be.an.Array();
    Record.fields.should.be.empty();
  });

  it('should have an empty array as its traits', function () {
    Record.traits.should.be.an.Array();
    Record.traits.should.be.empty();
  });

  it('should have Record as its baseType', function () {
    Record.should.have.property('baseType', Record);
  });

  it('should have false as its isInnerType', function () {
    Record.should.have.property('isInnerType', false);
  });
});
