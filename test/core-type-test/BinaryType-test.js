const should = require('should');
const BinaryType = require('../../index').Types.BinaryType;

describe('BinaryType', function () {
  it('should be an object', function () {
    BinaryType.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(BinaryType).should.have.length(8);
  });

  it('should have keys: [_id, id, type, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    BinaryType.should.have.keys('_id', 'id', 'type', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.BinaryType"', function () {
      BinaryType.should.have.property('_id', 'Core.BinaryType');
    });
  });

  describe('id', function () {
    it('should be "Core.BinaryType"', function () {
      BinaryType.should.have.property('id', 'Core.BinaryType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      BinaryType.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      BinaryType.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      BinaryType.fields.should.be.an.Array();
    });

    it('should be empty', function () {
      BinaryType.fields.should.be.empty();
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      BinaryType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      BinaryType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      BinaryType.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      BinaryType.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      BinaryType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be true', function () {
      BinaryType.isPrimitiveType.should.be.true();
    });
  });
});
