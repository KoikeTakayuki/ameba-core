const should = require('should');
const isPrimitiveTypeField = require('../../index').Fields.isPrimitiveType;

describe('isPrimitiveTypeField', function () {
  it('should be an object', function () {
    isPrimitiveTypeField.should.be.an.Object();
  });

  it('should have 10 keys', function () {
    Object.keys(isPrimitiveTypeField).should.have.length(10);
  });

  it('should have keys: [type, id, fieldType, isRequired, isListField, isUnique, autoIncrement, defaultValue, validator]', function () {
    isPrimitiveTypeField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "isPrimitiveType"', function () {
      isPrimitiveTypeField.should.have.property('id', 'isPrimitiveType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      isPrimitiveTypeField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      isPrimitiveTypeField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      isPrimitiveTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.BooleanType"', function () {
      isPrimitiveTypeField.fieldType.should.have.property('id', 'Core.BooleanType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      isPrimitiveTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      isPrimitiveTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be false', function () {
      isPrimitiveTypeField.defaultValue.should.be.false();
    });
  });
});
