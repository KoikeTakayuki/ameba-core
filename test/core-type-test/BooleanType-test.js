const should = require('should');
const BooleanType = require('../../core/types').BooleanType;

describe('BooleanType', () => {
  it('should be an object', () => {
    BooleanType.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(BooleanType).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    BooleanType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "BooleanType"', () => {
      BooleanType.should.have.property('_id', 'BooleanType');
    });
  });

  describe('id', () => {
    it('should be "BooleanType"', () => {
      BooleanType.should.have.property('id', 'BooleanType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      BooleanType.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      BooleanType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      BooleanType.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      BooleanType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      BooleanType.fields.should.be.an.Array();
    });

    it('should be empty', () => {
      BooleanType.fields.should.be.empty();
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      BooleanType.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      BooleanType.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      BooleanType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      BooleanType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be true', () => {
      BooleanType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be true', () => {
      BooleanType.isPrimitiveType.should.be.true();
    });
  });
});
