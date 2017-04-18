const should = require('should');
const NumberType = require('../../core/types').NumberType;

describe('NumberType', () => {
  it('should be an object', () => {
    NumberType.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(NumberType).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    NumberType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "NumberType"', () => {
      NumberType.should.have.property('_id', 'NumberType');
    });
  });

  describe('id', () => {
    it('should be "NumberType"', () => {
      NumberType.should.have.property('id', 'NumberType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      NumberType.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      NumberType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      NumberType.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      NumberType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      NumberType.fields.should.be.an.Array();
    });

    it('should be empty', () => {
      NumberType.fields.should.be.empty();
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      NumberType.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      NumberType.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      NumberType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      NumberType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be true', () => {
      NumberType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be true', () => {
      NumberType.isPrimitiveType.should.be.true();
    });
  });
});
