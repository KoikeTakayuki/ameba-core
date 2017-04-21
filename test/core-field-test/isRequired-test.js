const should = require('should');
const isRequiredField = require('../../core/fields').isRequired;

describe('isRequiredField', function () {
  it('should be an object', function () {
    isRequiredField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(isRequiredField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    isRequiredField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
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
