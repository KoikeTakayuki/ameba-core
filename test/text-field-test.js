const should = require('should');
const textField = require('../index').textField;

describe('textField', function () {
  it('should return an object', function () {
    textField('test').should.be.an.Object();
  });

  it('should return an object which has 6 keys', function () {
    Object.keys(textField('test')).should.have.length(6);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListType, defautValue]', function () {
    Object.keys(textField('test')).should.have.length(6);
  });

  it('should return an object whose id is "test"', function () {
    textField('test').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    textField('test').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    textField('test').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    textField('test').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.TextType"', function () {
    textField('test').fieldType.should.have.property('id', 'Core.TextType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    textField('test').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    textField('test', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    textField('test').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    textField('test', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(textField('test').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    textField('test', { defaultValue: 'aaa' }).defaultValue.should.be.equal('aaa');
  });
});
