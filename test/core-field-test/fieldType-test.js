const should = require('should');
const fieldTypeField = require('../../core/fields').fieldType;

describe('fieldTypeField', () => {
  it('should be an object', () => {
    fieldTypeField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(fieldTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    fieldTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "fieldType"', () => {
      fieldTypeField.should.have.property('id', 'fieldType');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      fieldTypeField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      fieldTypeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      fieldTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      fieldTypeField.fieldType.should.have.property('id', 'RecordType');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      fieldTypeField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      fieldTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(fieldTypeField.defaultValue, undefined);
    });
  });
});
