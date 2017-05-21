const should = require('should');
const RecordType = require('../../index').Types.RecordType;

describe('RecordType', function () {
  it('should be an object', function () {
    RecordType.should.be.an.Object();
  });

  it('should have 9 keys', function () {
    Object.keys(RecordType).should.have.length(9);
  });

  it('should have keys: [_id, type, id, name, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    RecordType.should.have.keys('_id', 'type', 'id', 'name', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.RecordType"', function () {
      RecordType.should.have.property('_id', 'Core.RecordType');
    });
  });

  describe('id', function () {
    it('should be "Core.RecordType"', function () {
      RecordType.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      RecordType.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      RecordType.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      RecordType.fields.should.be.an.Array();
    });

    it('should have 4 elements', function () {
      RecordType.fields.should.be.length(4);
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      RecordType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      RecordType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      RecordType.baseType.should.be.an.Object();
    });

    it('should have id "Core.Trait"', function () {
      RecordType.baseType.should.have.property('id', 'Core.Trait');
    });
  });

  describe('isInnerType', function () {
    it('should be false', function () {
      RecordType.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be false', function () {
      RecordType.isPrimitiveType.should.be.false();
    });
  });
});
