const should = require('should');
const idField = require('../../core/fields').id;

describe('idField', () => {
  it('should be an object', () => {
    idField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(idField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    idField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "id"', () => {
      idField.should.have.property('id', 'id');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      idField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      idField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      idField.fieldType.should.be.an.Object();
    });

    it('should have id "TextType"', () => {
      idField.fieldType.should.have.property('id', 'TextType');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      idField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      idField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(idField.defaultValue, undefined);
    });
  });
});
