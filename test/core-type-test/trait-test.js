let should = require('should'),
    Trait = require('../../core/types').Trait;

describe('Trait', function() {

  it ('should be an object', function () {
    Trait.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(Trait).should.have.length(9);
  });

  it ('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Trait.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "Trait"', function() {
      Trait.should.have.property('_id', 'Trait');
    });
  });

  describe('id', function() {
    it('should be "Trait"', function() {
      Trait.should.have.property('id', 'Trait');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      Trait.type.should.be.an.Object();
    });
  
    it('should have id "RecordType"', function () {
      Trait.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      Trait.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      Trait.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function() {
    it('should be an Array', function() {
      Trait.fields.should.be.an.Array();
    });

    it('should have 3 elements', function() {
      Trait.fields.should.be.length(3);
    });
  });

  describe('traits', function() {
    it('should be an Array', function() {
      Trait.traits.should.be.an.Array();
    });

    it('should be empty', function() {
      Trait.traits.should.be.empty()
    });
  });

  describe('baseType', function() {
    it('should be an Object', function() {
      Trait.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function() {
      Trait.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function() {
    it('should be false', function() {
      Trait.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function() {
    it('should be false', function() {
      Trait.isPrimitiveType.should.be.false();
    });
  });
});