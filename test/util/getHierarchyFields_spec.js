const should = require('should');
const getHierarchyFields = require('../../').util.getHierarchyFields;
const core = require('../../').core;
const recordType = require('../../').recordType;
const trait = require('../../').recordType;
const field = require('../../').field;

describe('getHierarchyFields', function () {
  it('should return an empty array if Record is given', function () {
    getHierarchyFields(core.Record).should.be.an.Array().and.empty();
  });

  it('should return an array if Trait is given', function () {
    getHierarchyFields(core.Trait).should.be.an.Array();
  });

  it('should return Trait fields if Trait is given', function () {
    getHierarchyFields(core.Trait).should.be.an.eql(core.Trait.fields);
  });

  it('should return an array if RecordType is given', function () {
    getHierarchyFields(core.RecordType).should.be.an.Array();
  });

  it('should return concatenation of RecordType and Trait fields if RecordType is given', function () {
    getHierarchyFields(core.RecordType)
      .should.be.an.eql(core.Trait.fields.concat(core.RecordType.fields));
  });

  it('should return all fields of given recordType, its traits and baseType ', function () {
    const field1 = field.textField('test', 'test');
    const field2 = field.numberField('test2', 'test2');
    const field3 = field.booleanField('test3', 'test3');

    const testRecordType = recordType(
      'a',
      'a',
      [field1],
      {
        traits: [trait('t', 't', [field2])],
        baseType: recordType('b', 'b', [field3]),
      });
    getHierarchyFields(testRecordType).should.be.an.eql([field3, field1, field2]);
  });
});
