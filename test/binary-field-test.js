const should = require('should');
const binaryField = require('../index').binaryField;

describe('binaryField', function () {
  it('should return an object', function () {
    binaryField('test').should.be.an.Object();
  });

  it('should return an object which has 7 keys', function () {
    Object.keys(binaryField('test')).should.have.length(7);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListField, defautValue, validator]', function () {
    binaryField('test').should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    binaryField('test').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    binaryField('test').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    binaryField('test').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    binaryField('test').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.BinaryType"', function () {
    binaryField('test').fieldType.should.have.property('id', 'Core.BinaryType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    binaryField('test').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    binaryField('test', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    binaryField('test').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    binaryField('test', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(binaryField('test').defaultValue, undefined);
  });

  // TODO This test case requires sample binary file.
  it('should return an object whose defaultValue is specified value', function () {
  });
});
