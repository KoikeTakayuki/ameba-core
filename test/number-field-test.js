const should = require('should');
const numberField = require('../index').numberField;

describe('numberField', function () {
  it('should return an object', function () {
    numberField('test').should.be.an.Object();
  });

  it('should return an object which has 7 keys', function () {
    Object.keys(numberField('test')).should.have.length(7);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListField, defautValue, validator]', function () {
    numberField('test').should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    numberField('test').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    numberField('test').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    numberField('test').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    numberField('test').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.NumberType"', function () {
    numberField('test').fieldType.should.have.property('id', 'Core.NumberType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    numberField('test').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    numberField('test', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    numberField('test').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    numberField('test', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(numberField('test').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    numberField('test', { defaultValue: 0 }).defaultValue.should.be.equal(0);
  });
});
