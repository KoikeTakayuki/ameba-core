const should = require('should');
const isPrimitiveTypeField = require('../../core/fields').isPrimitiveType;

describe('isPrimitiveTypeField', () => {
  it('should be an object', () => {
    isPrimitiveTypeField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(isPrimitiveTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    isPrimitiveTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "isPrimitiveType"', () => {
      isPrimitiveTypeField.should.have.property('id', 'isPrimitiveType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      isPrimitiveTypeField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      isPrimitiveTypeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      isPrimitiveTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "BooleanType"', () => {
      isPrimitiveTypeField.fieldType.should.have.property('id', 'BooleanType');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      isPrimitiveTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      isPrimitiveTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be false', () => {
      isPrimitiveTypeField.defaultValue.should.be.false();
    });
  });
});
