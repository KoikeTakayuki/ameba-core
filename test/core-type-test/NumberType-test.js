const should = require('should');
const NumberType = require('../../core/types').NumberType;

describe('NumberType', function () {
  it('should be an object', function () {
    NumberType.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(NumberType).should.have.length(8);
  });

  it('should have keys: [_id, id, type, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    NumberType.should.have.keys('_id', 'id', 'type', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.NumberType"', function () {
      NumberType.should.have.property('_id', 'Core.NumberType');
    });
  });

  describe('id', function () {
    it('should be "Core.NumberType"', function () {
      NumberType.should.have.property('id', 'Core.NumberType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      NumberType.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      NumberType.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      NumberType.fields.should.be.an.Array();
    });

    it('should be empty', function () {
      NumberType.fields.should.be.empty();
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      NumberType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      NumberType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      NumberType.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      NumberType.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      NumberType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be true', function () {
      NumberType.isPrimitiveType.should.be.true();
    });
  });
});
