const should = require('should');
const functionField = require('../index').functionField;

describe('functionField', function () {
  it('should return an object', function () {
    functionField('test', 'name').should.be.an.Object();
  });

  it('should return an object which has 8 keys', function () {
    Object.keys(functionField('test', 'name')).should.have.length(8);
  });

  it('should return an object which has keys: [type, id, name, fieldType, isRequired, isListField, defautValue, validator]', function () {
    functionField('test', 'name').should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    functionField('test', 'name').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    functionField('test', 'name').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    functionField('test', 'name').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    functionField('test', 'name').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.FunctionType"', function () {
    functionField('test', 'name').fieldType.should.have.property('id', 'Core.FunctionType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    functionField('test', 'name').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    functionField('test', 'name', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    functionField('test', 'name').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    functionField('test', 'name', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(functionField('test', 'name').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    const testFunction = x => x;
    functionField('test', 'name', { defaultValue: testFunction }).defaultValue.should.be.equal(testFunction);
  });
});
