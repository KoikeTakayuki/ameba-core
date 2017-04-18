const should = require('should');
const Field = require('../../core/types').Field;

describe('Field', () => {
  it('should be an object', () => {
    Field.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(Field).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    Field.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "Field"', () => {
      Field.should.have.property('_id', 'Field');
    });
  });

  describe('id', () => {
    it('should be "Field"', () => {
      Field.should.have.property('id', 'Field');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      Field.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      Field.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      Field.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      Field.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      Field.fields.should.be.an.Array();
    });

    it('should have 6 elements', () => {
      Field.fields.should.be.length(4);
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      Field.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      Field.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      Field.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      Field.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be true', () => {
      Field.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be false', () => {
      Field.isPrimitiveType.should.be.false();
    });
  });
});
