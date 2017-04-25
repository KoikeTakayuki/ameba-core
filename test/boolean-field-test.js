const should = require('should');
const booleanField = require('../index').booleanField;

describe('booleanField', function () {
  it('should return an object', function () {
    booleanField('test').should.be.an.Object();
  });

  it('should return an object which has 6 keys', function () {
    Object.keys(booleanField('test')).should.have.length(6);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListType, defautValue]', function () {
    Object.keys(booleanField('test')).should.have.length(6);
  });

  it('should return an object whose id is "test"', function () {
    booleanField('test').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    booleanField('test').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    booleanField('test').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    booleanField('test').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.BooleanType"', function () {
    booleanField('test').fieldType.should.have.property('id', 'Core.BooleanType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    booleanField('test').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    booleanField('test', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    booleanField('test').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    booleanField('test', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(booleanField('test').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    booleanField('test', { defaultValue: true }).defaultValue.should.be.true();
  });
});
