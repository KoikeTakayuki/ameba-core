const should = require('should');
const booleanField = require('../index').booleanField;

describe('booleanField', function () {
  it('should return an object', function () {
    booleanField('test', 'name').should.be.an.Object();
  });

  it('should return an object which has 10 keys', function () {
    Object.keys(booleanField('test', 'name')).should.have.length(10);
  });

  it('should return an object which has keys: [type, id, name, fieldType, isRequired, isListType, isUnique, autoIncrement, defautValue]', function () {
    booleanField('test', 'name').should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    booleanField('test', 'name').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    booleanField('test', 'name').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    booleanField('test', 'name').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    booleanField('test', 'name').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.BooleanType"', function () {
    booleanField('test', 'name').fieldType.should.have.property('id', 'Core.BooleanType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    booleanField('test', 'name').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    booleanField('test', 'name', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    booleanField('test', 'name').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    booleanField('test', 'name', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(booleanField('test', 'name').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    booleanField('test', 'name', { defaultValue: true }).defaultValue.should.be.true();
  });
});
