const should = require('should');
const TextType = require('../../core/types').TextType;

describe('TextType', () => {
  it('should be an object', () => {
    TextType.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(TextType).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    TextType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "TextType"', () => {
      TextType.should.have.property('_id', 'TextType');
    });
  });

  describe('id', () => {
    it('should be "TextType"', () => {
      TextType.should.have.property('id', 'TextType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      TextType.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      TextType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      TextType.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      TextType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      TextType.fields.should.be.an.Array();
    });

    it('should be empty', () => {
      TextType.fields.should.be.empty();
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      TextType.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      TextType.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      TextType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      TextType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be true', () => {
      TextType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be true', () => {
      TextType.isPrimitiveType.should.be.true();
    });
  });
});
