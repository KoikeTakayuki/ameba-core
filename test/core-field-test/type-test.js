const should = require('should');
const typeField = require('../../core/fields').type;

describe('typeField', () => {
  it('should be an object', () => {
    typeField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(typeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    typeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "type"', () => {
      typeField.should.have.property('id', 'type');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      typeField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      typeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      typeField.fieldType.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      typeField.fieldType.should.have.property('id', 'RecordType');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      typeField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      typeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(typeField.defaultValue, undefined);
    });
  });
});
