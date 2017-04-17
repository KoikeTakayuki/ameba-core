let should = require('should'),
    NumberType = require('../../core/core-type').NumberType;

describe('NumberType', function() {

  it ('should be an object', function () {
    NumberType.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(NumberType).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    NumberType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "NumberType"', function() {
      NumberType.should.have.property('_id', 'NumberType');
    });
  });

  describe('id', function() {
    it('should be "NumberType"', function() {
      NumberType.should.have.property('id', 'NumberType');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      NumberType.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      NumberType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      NumberType.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      NumberType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      NumberType.fields.should.be.an.Array();
    });

    it('should be empty', function() {
      NumberType.fields.should.be.empty();
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      NumberType.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      NumberType.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      NumberType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function() {
      NumberType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function() {
    it('should be true', function() {
      NumberType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be true', function() {
      NumberType.isPrimitiveType.should.be.true();
    });
  });
});