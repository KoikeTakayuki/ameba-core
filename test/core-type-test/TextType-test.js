const should = require('should');
const TextType = require('../../index').Types.TextType;

describe('TextType', function () {
  it('should be an object', function () {
    TextType.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(TextType).should.have.length(8);
  });

  it('should have keys: [type, id, name, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    TextType.should.have.keys('type', 'id', 'name', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('id', function () {
    it('should be "Core.TextType"', function () {
      TextType.should.have.property('id', 'Core.TextType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      TextType.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      TextType.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      TextType.fields.should.be.an.Array();
    });

    it('should be empty', function () {
      TextType.fields.should.be.empty();
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      TextType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      TextType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      TextType.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      TextType.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      TextType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be true', function () {
      TextType.isPrimitiveType.should.be.true();
    });
  });
});
