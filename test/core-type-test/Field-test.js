const should = require('should');
const Field = require('../../index').Types.Field;

describe('Field', function () {
  it('should be an object', function () {
    Field.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(Field).should.have.length(8);
  });

  it('should have keys: [_id, id, type, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Field.should.have.keys('_id', 'id', 'type', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.Field"', function () {
      Field.should.have.property('_id', 'Core.Field');
    });
  });

  describe('id', function () {
    it('should be "Core.Field"', function () {
      Field.should.have.property('id', 'Core.Field');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      Field.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      Field.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      Field.fields.should.be.an.Array();
    });

    it('should have 6 elements', function () {
      Field.fields.should.be.length(6);
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      Field.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      Field.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      Field.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      Field.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      Field.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be false', function () {
      Field.isPrimitiveType.should.be.false();
    });
  });
});
