const should = require('should');
const defaultValueField = require('../../core/fields').defaultValue;

describe('defaultValueField', function () {
  it('should be an object', function () {
    defaultValueField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(defaultValueField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    defaultValueField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "defaultValue"', function () {
      defaultValueField.should.have.property('id', 'defaultValue');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      defaultValueField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      defaultValueField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      defaultValueField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      defaultValueField.fieldType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      defaultValueField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      defaultValueField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(defaultValueField.defaultValue, undefined);
    });
  });
});
