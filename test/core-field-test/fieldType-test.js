const should = require('should');
const fieldTypeField = require('../../index').Fields.fieldType;

describe('fieldTypeField', function () {
  it('should be an object', function () {
    fieldTypeField.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(fieldTypeField).should.have.length(8);
  });

  it('should have keys: [type, id, name, fieldType, isRequired, isListField, defaultValue, validator]', function () {
    fieldTypeField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "fieldType"', function () {
      fieldTypeField.should.have.property('id', 'fieldType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      fieldTypeField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      fieldTypeField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      fieldTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      fieldTypeField.fieldType.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      fieldTypeField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      fieldTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(fieldTypeField.defaultValue, undefined);
    });
  });
});
