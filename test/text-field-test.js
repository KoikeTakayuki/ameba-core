const should = require('should');
const textField = require('../index').textField;

describe('textField', function () {
  it('should return an object', function () {
    textField('test', 'name').should.be.an.Object();
  });

  it('should return an object which has 10 keys', function () {
    Object.keys(textField('test', 'name')).should.have.length(10);
  });

  it('should return an object which has keys: [type, id, name, fieldType, isRequired, isListField, isUnique, autoIncrement, defautValue, validator]', function () {
    textField('test', 'name').should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    textField('test', 'name').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    textField('test', 'name').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    textField('test', 'name').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    textField('test', 'name').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.TextType"', function () {
    textField('test', 'name').fieldType.should.have.property('id', 'Core.TextType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    textField('test', 'name').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    textField('test', 'name', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    textField('test', 'name').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    textField('test', 'name', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(textField('test', 'name').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    textField('test', 'name', { defaultValue: 'aaa' }).defaultValue.should.be.equal('aaa');
  });
});
