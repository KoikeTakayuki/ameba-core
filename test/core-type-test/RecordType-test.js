let should = require('should'),
    RecordType = require('../../core/core-type').RecordType;

describe('RecordType', function() {

  it ('should be an object', function () {
    RecordType.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(RecordType).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    RecordType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "RecordType"', function() {
      RecordType.should.have.property('_id', 'RecordType');
    });
  });

  describe('id', function() {
    it('should be "RecordType"', function() {
      RecordType.should.have.property('id', 'RecordType');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      RecordType.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      RecordType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      RecordType.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      RecordType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      RecordType.fields.should.be.an.Array();
    });

    it('should have 3 elements', function() {
      RecordType.fields.should.be.length(3);
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      RecordType.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      RecordType.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      RecordType.baseType.should.be.an.Object();
    });

    it('should have id "Trait"', function() {
      RecordType.baseType.should.have.property('id', 'Trait');
    });
  });

  describe('isInnerType', function() {
    it('should be false', function() {
      RecordType.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be false', function() {
      RecordType.isPrimitiveType.should.be.false();
    });
  });
});