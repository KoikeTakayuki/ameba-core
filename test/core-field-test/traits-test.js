const should = require('should');
const traitsField = require('../../index').Fields.traits;

describe('traitsField', function () {
  it('should be an object', function () {
    traitsField.should.be.an.Object();
  });

  it('should have 10 keys', function () {
    Object.keys(traitsField).should.have.length(10);
  });

  it('should have keys: [type, id, fieldType, isRequired, isListField, isUnique, autoIncrement, defaultValue, validator]', function () {
    traitsField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "traits"', function () {
      traitsField.should.have.property('id', 'traits');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      traitsField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      traitsField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      traitsField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.Trait"', function () {
      traitsField.fieldType.should.have.property('id', 'Core.Trait');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      traitsField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be true', function () {
      traitsField.isListField.should.be.true();
    });
  });

  describe('defaultValue', function () {
    it('should be an Array', function () {
      traitsField.defaultValue.should.be.an.Array();
    });

    it('should be empty', function () {
      traitsField.defaultValue.should.be.empty();
    });
  });
});
