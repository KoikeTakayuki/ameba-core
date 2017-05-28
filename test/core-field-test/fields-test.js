const should = require('should');
const fieldsField = require('../../index').Fields.fields;

describe('fieldsField', function () {
  it('should be an object', function () {
    fieldsField.should.be.an.Object();
  });

  it('should have 10 keys', function () {
    Object.keys(fieldsField).should.have.length(10);
  });

  it('should have keys: [type, id, name, fieldType, isRequired, isListField, isUnique, autoIncrement, defaultValue, validator]', function () {
    fieldsField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
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
