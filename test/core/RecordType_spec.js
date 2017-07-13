const should = require('should');
const Trait = require('../../').core.Trait;
const RecordType = require('../../').core.RecordType;
const Field = require('../../').core.Field;
const BooleanType = require('../../').core.BooleanType;

describe('RecordType', function () {
  it('should be an Object', function () {
    RecordType.should.be.an.Object();
  });

  it('should have 7 properties', function () {
    Object.keys(RecordType).should.have.length(7);
  });

  it('should have keys ["type", "id", "name", "fields", "traits", "baseType", "isInnerType"]', function () {
    RecordType.should.have.keys('type', 'id', 'name', 'fields', 'traits', 'baseType', 'isInnerType');
  });

  it('should have RecordType as its type', function () {
    RecordType.should.have.property('type', RecordType);
  });

  describe('fields', function () {
    it('should be an array', function () {
      RecordType.fields.should.be.an.Array();
    });
    it('should have length 3', function () {
      RecordType.fields.should.have.length(3);
    });
    it('should have traits field', function () {
      RecordType.fields[0].should.have.property('id', 'traits');
      RecordType.fields[0].should.have.property('type', Field);
      RecordType.fields[0].should.have.property('fieldType', Trait);
      RecordType.fields[0].should.have.property('isListType', true);
    });
    it('should have baseType field', function () {
      RecordType.fields[1].should.have.property('id', 'baseType');
      RecordType.fields[1].should.have.property('type', Field);
      RecordType.fields[1].should.have.property('fieldType', RecordType);
    });
    it('should have isInnerType field', function () {
      RecordType.fields[2].should.have.property('id', 'isInnerType');
      RecordType.fields[2].should.have.property('type', Field);
      RecordType.fields[2].should.have.property('fieldType', BooleanType);
    });
  });

  it('should have an empty array as its traits', function () {
    RecordType.traits.should.be.an.Array();
    RecordType.traits.should.be.empty();
  });

  it('should have Trait as its baseType', function () {
    RecordType.should.have.property('baseType', Trait);
  });

  it('should have false as its isInnerType', function () {
    RecordType.should.have.property('isInnerType', false);
  });
});
