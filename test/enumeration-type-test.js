const should = require('should');
const enumerationType = require('../index').enumerationType;

describe('enumerationType', function () {
  it('should return an object', function () {
    enumerationType('test', ['test']).should.be.an.Object();
  });

  it('should return an object which has 8 keys', function () {
    Object.keys(enumerationType('test', ['test'])).should.have.length(8);
  });

  it('should return an object which has keys: [id, type, fields, baseType, traits, isInnerType, isPrimitiveType, values]', function () {
    enumerationType('test', ['test']).should.have.keys('id', 'type', 'fields', 'baseType', 'traits', 'isInnerType', 'isPrimitiveType', 'values');
  });

  it('should return an object whose id is "test"', function () {
    enumerationType('test', ['test']).should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    enumerationType('test', ['test']).type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    enumerationType('test', ['test']).type.should.have.property('id', 'Core.EnumerationType');
  });

  it('should return an object whose fields is an Array', function () {
    enumerationType('test', ['test']).fields.should.be.an.Array();
  });

  it('should return an object whose fields is length 0', function () {
    enumerationType('test', ['test']).fields.should.have.length(0);
  });

  it('should return an object whose traits is an Array', function () {
    enumerationType('test', ['test']).traits.should.be.an.Array();
  });

  it('should return an object whose traits is length 0', function () {
    enumerationType('test', ['test']).traits.should.have.length(0);
  });

  it('should return an object whose isInnerType is true', function () {
    enumerationType('test', ['test']).isInnerType.should.be.true();
  });

  it('should return an object whose values is specified array', function () {
    const values = ['test'];
    enumerationType('test', values).values.should.be.equal(values);
  });
});
