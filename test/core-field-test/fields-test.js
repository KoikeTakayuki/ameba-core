const should = require('should');
const fieldsField = require('../../core/fields').fields;

describe('fieldsField', function () {
  it('should be an object', function () {
    fieldsField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(fieldsField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    fieldsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "fields"', function () {
      fieldsField.should.have.property('id', 'fields');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      fieldsField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      fieldsField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      fieldsField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      fieldsField.fieldType.should.have.property('id', 'Core.Field');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      fieldsField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be true', function () {
      fieldsField.isListField.should.be.true();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(fieldsField.defaultValue, undefined);
    });
  });
});
