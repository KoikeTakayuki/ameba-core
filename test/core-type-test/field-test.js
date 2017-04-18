let should = require('should'),
    Field = require('../../core/types').Field;

describe('Field', function() {

  it ('should be an object', function () {
    Field.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(Field).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Field.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "Field"', function() {
      Field.should.have.property('_id', 'Field');
    });
  });

  describe('id', function() {
    it('should be "Field"', function() {
      Field.should.have.property('id', 'Field');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      Field.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      Field.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      Field.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      Field.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      Field.fields.should.be.an.Array();
    });

    it('should have 6 elements', function() {
      Field.fields.should.be.length(4);
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      Field.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      Field.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      Field.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function() {
      Field.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function() {
    it('should be true', function() {
      Field.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be false', function() {
      Field.isPrimitiveType.should.be.false();
    });
  });
});