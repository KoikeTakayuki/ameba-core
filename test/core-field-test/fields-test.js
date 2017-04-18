const should = require('should');
const fieldsField = require('../../core/fields').fields;

describe('fieldsField', () => {
  it('should be an object', () => {
    fieldsField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(fieldsField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    fieldsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "fields"', () => {
      fieldsField.should.have.property('id', 'fields');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      fieldsField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      fieldsField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      fieldsField.fieldType.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      fieldsField.fieldType.should.have.property('id', 'Field');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      fieldsField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be true', () => {
      fieldsField.isListField.should.be.true();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(fieldsField.defaultValue, undefined);
    });
  });
});
