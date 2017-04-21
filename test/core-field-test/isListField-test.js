const should = require('should');
const isListFieldField = require('../../core/fields').isListField;

describe('isListFieldField', function () {
  it('should be an object', function () {
    isListFieldField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(isListFieldField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    isListFieldField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "isListField"', function () {
      isListFieldField.should.have.property('id', 'isListField');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      isListFieldField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      isListFieldField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      isListFieldField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.BooleanType"', function () {
      isListFieldField.fieldType.should.have.property('id', 'Core.BooleanType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      isListFieldField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      isListFieldField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be false', function () {
      isListFieldField.defaultValue.should.be.false();
    });
  });
});
