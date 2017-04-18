let should = require('should'),
    Module = require('../../core/types').Module;

describe('Module', function() {

  it ('should be an object', function () {
    Module.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(Module).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Module.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "Module"', function() {
      Module.should.have.property('_id', 'Module');
    });
  });

  describe('id', function() {
    it('should be "Module"', function() {
      Module.should.have.property('id', 'Module');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      Module.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      Module.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      Module.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      Module.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      Module.fields.should.be.an.Array();
    });

    it('should have 1 elements', function() {
      Module.fields.should.be.length(1);
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      Module.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      Module.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      Module.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function() {
      Module.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function() {
    it('should be false', function() {
      Module.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be false', function() {
      Module.isPrimitiveType.should.be.false();
    });
  });
});