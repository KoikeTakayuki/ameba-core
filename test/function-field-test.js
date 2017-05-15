const should = require('should');
const functionField = require('../index').functionField;

describe('functionField', function () {
  it('should return an object', function () {
    functionField('test').should.be.an.Object();
  });

  it('should return an object which has 7 keys', function () {
    Object.keys(functionField('test')).should.have.length(7);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListField, defautValue, validator]', function () {
    functionField('test').should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    functionField('test').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    functionField('test').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    functionField('test').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    functionField('test').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.FunctionType"', function () {
    functionField('test').fieldType.should.have.property('id', 'Core.FunctionType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    functionField('test').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    functionField('test', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    functionField('test').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    functionField('test', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(functionField('test').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    const testFunction = x => x;
    functionField('test', { defaultValue: testFunction }).defaultValue.should.be.equal(testFunction);
  });
});
