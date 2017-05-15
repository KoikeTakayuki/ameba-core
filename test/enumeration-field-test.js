const should = require('should');
const enumerationField = require('../index').enumerationField;

describe('enumerationField', function () {
  it('should return an object', function () {
    enumerationField('test', ['test1', 'test2']).should.be.an.Object();
  });

  it('should return an object which has 7 keys', function () {
    Object.keys(enumerationField('test', ['test1', 'test2'])).should.have.length(7);
  });

  it('should return an object which has keys: [id, type, fieldType, isRequired, isListField, defautValue, validator]', function () {
    enumerationField('test', ['test1', 'test2']).should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    enumerationField('test', ['test1', 'test2']).should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    enumerationField('test', ['test1', 'test2']).type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    enumerationField('test', ['test1', 'test2']).type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    enumerationField('test', ['test1', 'test2']).fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.TextType"', function () {
    enumerationField('test', ['test1', 'test2']).fieldType.should.have.property('id', 'Core.TextType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    enumerationField('test', ['test1', 'test2']).isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    enumerationField('test', ['test1', 'test2'], { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    enumerationField('test', ['test1', 'test2']).isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    enumerationField('test', ['test1', 'test2'], { isListField: true }).isListField.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(enumerationField('test', ['test1', 'test2']).defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    enumerationField('test', ['test1', 'test2'], { defaultValue: 'test1' }).defaultValue.should.be.equal('test1');
  });

  it('should emit error when invalid defaultValue given', function () {
    (function () {
      enumerationField('test', ['test1', 'test2'], { defaultValue: 'test' });
    }).should.throwError('invalid defaultValue given');
  });
});
