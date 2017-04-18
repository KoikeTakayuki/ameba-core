const should = require('should');
const defaultValueField = require('../../core/fields').defaultValue;

describe('defaultValueField', () => {
  it('should be an object', () => {
    defaultValueField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(defaultValueField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    defaultValueField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "defaultValue"', () => {
      defaultValueField.should.have.property('id', 'defaultValue');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      defaultValueField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      defaultValueField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      defaultValueField.fieldType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      defaultValueField.fieldType.should.have.property('id', 'Record');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      defaultValueField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      defaultValueField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(defaultValueField.defaultValue, undefined);
    });
  });
});
