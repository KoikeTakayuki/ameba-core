const should = require('should');
const typeField = require('../../index').Fields.type;

describe('typeField', function () {
  it('should be an object', function () {
    typeField.should.be.an.Object();
  });

  it('should have 7 keys', function () {
    Object.keys(typeField).should.have.length(7);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue, validator]', function () {
    typeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "type"', function () {
      typeField.should.have.property('id', 'type');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      typeField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      typeField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      typeField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      typeField.fieldType.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      typeField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      typeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(typeField.defaultValue, undefined);
    });
  });
});
