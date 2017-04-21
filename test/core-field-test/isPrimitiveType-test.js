const should = require('should');
const isPrimitiveTypeField = require('../../core/fields').isPrimitiveType;

describe('isPrimitiveTypeField', function () {
  it('should be an object', function () {
    isPrimitiveTypeField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(isPrimitiveTypeField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    isPrimitiveTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "isPrimitiveType"', function () {
      isPrimitiveTypeField.should.have.property('id', 'isPrimitiveType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      isPrimitiveTypeField.type.should.be.an.Object();
    });

    it('should have id "Field"', function () {
      isPrimitiveTypeField.type.should.have.property('id', 'Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      isPrimitiveTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "BooleanType"', function () {
      isPrimitiveTypeField.fieldType.should.have.property('id', 'BooleanType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      isPrimitiveTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      isPrimitiveTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be false', function () {
      isPrimitiveTypeField.defaultValue.should.be.false();
    });
  });
});
