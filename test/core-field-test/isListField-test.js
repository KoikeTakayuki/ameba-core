const should = require('should');
const isListFieldField = require('../../core/fields').isListField;

describe('isListFieldField', () => {
  it('should be an object', () => {
    isListFieldField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(isListFieldField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    isListFieldField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "isListField"', () => {
      isListFieldField.should.have.property('id', 'isListField');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      isListFieldField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      isListFieldField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      isListFieldField.fieldType.should.be.an.Object();
    });

    it('should have id "BooleanType"', () => {
      isListFieldField.fieldType.should.have.property('id', 'BooleanType');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      isListFieldField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      isListFieldField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be false', () => {
      isListFieldField.defaultValue.should.be.false();
    });
  });
});
