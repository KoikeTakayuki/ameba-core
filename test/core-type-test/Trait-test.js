const should = require('should');
const Trait = require('../../core/types').Trait;

describe('Trait', () => {
  it('should be an object', () => {
    Trait.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(Trait).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    Trait.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "Trait"', () => {
      Trait.should.have.property('_id', 'Trait');
    });
  });

  describe('id', () => {
    it('should be "Trait"', () => {
      Trait.should.have.property('id', 'Trait');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      Trait.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      Trait.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      Trait.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      Trait.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      Trait.fields.should.be.an.Array();
    });

    it('should have 3 elements', () => {
      Trait.fields.should.be.length(3);
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      Trait.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      Trait.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      Trait.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      Trait.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be false', () => {
      Trait.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be false', () => {
      Trait.isPrimitiveType.should.be.false();
    });
  });
});
