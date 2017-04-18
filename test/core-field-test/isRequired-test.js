const should = require('should');
const isRequiredField = require('../../core/fields').isRequired;

describe('isRequiredField', () => {
  it('should be an object', () => {
    isRequiredField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(isRequiredField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    isRequiredField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "isRequired"', () => {
      isRequiredField.should.have.property('id', 'isRequired');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      isRequiredField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      isRequiredField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      isRequiredField.fieldType.should.be.an.Object();
    });

    it('should have id "BooleanType"', () => {
      isRequiredField.fieldType.should.have.property('id', 'BooleanType');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      isRequiredField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      isRequiredField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be false', () => {
      isRequiredField.defaultValue.should.be.false();
    });
  });
});
