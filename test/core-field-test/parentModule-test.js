const should = require('should');
const parentModuleField = require('../../core/fields').parentModule;

describe('parentModuleField', function () {
  it('should be an object', function () {
    parentModuleField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(parentModuleField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    parentModuleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "parentModule"', function () {
      parentModuleField.should.have.property('id', 'parentModule');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      parentModuleField.type.should.be.an.Object();
    });

    it('should have id "Field"', function () {
      parentModuleField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      parentModuleField.fieldType.should.be.an.Object();
    });

    it('should have id "Module"', function () {
      parentModuleField.fieldType.should.have.property('id', 'Module');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      parentModuleField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      parentModuleField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(parentModuleField.defaultValue, undefined);
    });
  });
});
