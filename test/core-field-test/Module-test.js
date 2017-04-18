const should = require('should');
const moduleField = require('../../core/fields').module;

describe('moduleField', () => {
  it('should be an object', () => {
    moduleField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(moduleField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    moduleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "module"', () => {
      moduleField.should.have.property('id', 'module');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      moduleField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      moduleField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      moduleField.fieldType.should.be.an.Object();
    });

    it('should have id "Module"', () => {
      moduleField.fieldType.should.have.property('id', 'Module');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      moduleField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      moduleField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(moduleField.defaultValue, undefined);
    });
  });
});
