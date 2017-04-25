const should = require('should');
const idField = require('../../index').Fields.id;

describe('idField', function () {
  it('should be an object', function () {
    idField.should.be.an.Object();
  });

  it('should have 6 keys', function () {
    Object.keys(idField).should.have.length(6);
  });

  it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
    idField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
  });

  describe('id', function () {
    it('should be "id"', function () {
      idField.should.have.property('id', 'id');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      idField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      idField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      idField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.TextType"', function () {
      idField.fieldType.should.have.property('id', 'Core.TextType');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      idField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      idField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(idField.defaultValue, undefined);
    });
  });
});
