const should = require('should');
const parentModuleField = require('../../core/fields').parentModule;

describe('parentModuleField', () => {
  it('should be an object', () => {
    parentModuleField.should.be.an.Object();
  });

  it('should have 6 keys', () => {
    Object.keys(parentModuleField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', () => {
    parentModuleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', () => {
    it('should be "parentModule"', () => {
      parentModuleField.should.have.property('id', 'parentModule');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      parentModuleField.type.should.be.an.Object();
    });

    it('should have id "Field"', () => {
      parentModuleField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', () => {
    it('should be an Object', () => {
      parentModuleField.fieldType.should.be.an.Object();
    });

    it('should have id "Module"', () => {
      parentModuleField.fieldType.should.have.property('id', 'Module');
    });
  });

  describe('isRequired', () => {
    it('should be true', () => {
      parentModuleField.isRequired.should.be.true();
    });
  });

  describe('isListField', () => {
    it('should be false', () => {
      parentModuleField.isListField.should.be.false();
    });
  });

  describe('defaultValue', () => {
    it('should be undefined', () => {
      should.equal(parentModuleField.defaultValue, undefined);
    });
  });
});
