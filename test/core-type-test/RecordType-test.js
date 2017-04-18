const should = require('should');
const RecordType = require('../../core/types').RecordType;

describe('RecordType', () => {
  it('should be an object', () => {
    RecordType.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(RecordType).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    RecordType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "RecordType"', () => {
      RecordType.should.have.property('_id', 'RecordType');
    });
  });

  describe('id', () => {
    it('should be "RecordType"', () => {
      RecordType.should.have.property('id', 'RecordType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      RecordType.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      RecordType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      RecordType.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      RecordType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      RecordType.fields.should.be.an.Array();
    });

    it('should have 3 elements', () => {
      RecordType.fields.should.be.length(3);
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      RecordType.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      RecordType.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      RecordType.baseType.should.be.an.Object();
    });

    it('should have id "Trait"', () => {
      RecordType.baseType.should.have.property('id', 'Trait');
    });
  });

  describe('isInnerType', () => {
    it('should be false', () => {
      RecordType.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be false', () => {
      RecordType.isPrimitiveType.should.be.false();
    });
  });
});
