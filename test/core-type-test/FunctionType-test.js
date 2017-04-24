const should = require('should');
const FunctionType = require('../../core/types').FunctionType;

describe('FunctionType', function () {
  it('should be an object', function () {
    FunctionType.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(FunctionType).should.have.length(8);
  });

  it('should have keys: [_id, id, type, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    FunctionType.should.have.keys('_id', 'id', 'type', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.FunctionType"', function () {
      FunctionType.should.have.property('_id', 'Core.FunctionType');
    });
  });

  describe('id', function () {
    it('should be "Core.FunctionType"', function () {
      FunctionType.should.have.property('id', 'Core.FunctionType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      FunctionType.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      FunctionType.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      FunctionType.fields.should.be.an.Array();
    });

    it('should be empty', function () {
      FunctionType.fields.should.be.empty();
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      FunctionType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      FunctionType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      FunctionType.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      FunctionType.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      FunctionType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be true', function () {
      FunctionType.isPrimitiveType.should.be.true();
    });
  });
});
