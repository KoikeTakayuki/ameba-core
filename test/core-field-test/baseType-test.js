const should = require('should');
const baseTypeField = require('../../core/fields').baseType;

describe('baseTypeField', () => {
  it('should be an object', () => {
    baseTypeField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(baseTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    baseTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "baseType"', () => {
      baseTypeField.should.have.property('id', 'baseType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      baseTypeField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      baseTypeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      baseTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      baseTypeField.fieldType.should.have.property('id', 'RecordType');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      baseTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      baseTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be an Object', () => {
      baseTypeField.defaultValue.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      baseTypeField.defaultValue.should.have.property('id', 'Record');
    });
  });
});
