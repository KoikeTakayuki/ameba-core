const should = require('should');
const isInnerTypeField = require('../../core/fields').isInnerType;

describe('isInnerTypeField', () => {
  it('should be an object', () => {
    isInnerTypeField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(isInnerTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    isInnerTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "isInnerType"', () => {
      isInnerTypeField.should.have.property('id', 'isInnerType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      isInnerTypeField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      isInnerTypeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      isInnerTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "BooleanType"', () => {
      isInnerTypeField.fieldType.should.have.property('id', 'BooleanType');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      isInnerTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      isInnerTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be false', () => {
      isInnerTypeField.defaultValue.should.be.false();
    });
  });
});
