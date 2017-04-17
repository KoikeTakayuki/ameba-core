let should = require('should'),
    TextType = require('../../core/core-type').TextType;

describe('TextType', function() {

  it ('should be an object', function () {
    TextType.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(TextType).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    TextType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "TextType"', function() {
      TextType.should.have.property('_id', 'TextType');
    });
  });

  describe('id', function() {
    it('should be "TextType"', function() {
      TextType.should.have.property('id', 'TextType');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      TextType.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      TextType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      TextType.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      TextType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      TextType.fields.should.be.an.Array();
    });

    it('should be empty', function() {
      TextType.fields.should.be.empty();
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      TextType.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      TextType.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      TextType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function() {
      TextType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function() {
    it('should be true', function() {
      TextType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be true', function() {
      TextType.isPrimitiveType.should.be.true();
    });
  });
});