const should = require('should');
const traitsField = require('../../core/fields').traits;

describe('traitsField', () => {
  it('should be an object', () => {
    traitsField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(traitsField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    traitsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "traits"', () => {
      traitsField.should.have.property('id', 'traits');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      traitsField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      traitsField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      traitsField.fieldType.should.be.an.Object();
    });

    it('should have id "Trait"', () => {
      traitsField.fieldType.should.have.property('id', 'Trait');
    });
  });

  describe('isRequired', () => {
    it('should be false', () => {
      traitsField.isRequired.should.be.false();
    });
  });

  describe('isListField', () => {
    it('should be true', () => {
      traitsField.isListField.should.be.true();
    });
  });

  describe('defaultValue', () => {
    it('should be an Array', () => {
      traitsField.defaultValue.should.be.an.Array();
    });

    it('should be empty', () => {
      traitsField.defaultValue.should.be.empty();
    });
  });
});
