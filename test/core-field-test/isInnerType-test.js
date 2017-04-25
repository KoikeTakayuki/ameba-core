const should = require('should');
const isInnerTypeField = require('../../index').Fields.isInnerType;

describe('isInnerTypeField', function () {
  it('should be an object', function () {
    isInnerTypeField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(isInnerTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    isInnerTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "isInnerType"', function () {
      isInnerTypeField.should.have.property('id', 'isInnerType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      isInnerTypeField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      isInnerTypeField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      isInnerTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.BooleanType"', function () {
      isInnerTypeField.fieldType.should.have.property('id', 'Core.BooleanType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      isInnerTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      isInnerTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be false', function () {
      isInnerTypeField.defaultValue.should.be.false();
    });
  });
});
