const should = require('should');
const isRequiredField = require('../../index').Fields.isRequired;

describe('isRequiredField', function () {
  it('should be an object', function () {
    isRequiredField.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(isRequiredField).should.have.length(8);
  });

  it('should have keys: [type, id, name, fieldType, isRequired, isListField, defaultValue, validator]', function () {
    isRequiredField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "isRequired"', function () {
      isRequiredField.should.have.property('id', 'isRequired');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      isRequiredField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      isRequiredField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      isRequiredField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.BooleanType"', function () {
      isRequiredField.fieldType.should.have.property('id', 'Core.BooleanType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      isRequiredField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      isRequiredField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be false', function () {
      isRequiredField.defaultValue.should.be.false();
    });
  });
});
