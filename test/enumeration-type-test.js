const should = require('should');
const enumerationType = require('../index').enumerationType;

describe('enumerationType', function () {
  it('should return an object', function () {
    enumerationType('test', 'name', ['test']).should.be.an.Object();
  });

  it('should return an object which has 9 keys', function () {
    Object.keys(enumerationType('test', 'name', ['test'])).should.have.length(9);
  });

  it('should return an object which has keys: [type, id, name, fields, baseType, traits, isInnerType, isPrimitiveType, values]', function () {
    enumerationType('test', 'name', ['test']).should.have.keys('type', 'id', 'name', 'fields', 'baseType', 'traits', 'isInnerType', 'isPrimitiveType', 'values');
  });

  it('should return an object whose id is "test"', function () {
    enumerationType('test', 'name', ['test']).should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    enumerationType('test', 'name', ['test']).type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    enumerationType('test', 'name', ['test']).type.should.have.property('id', 'Core.EnumerationType');
  });

  it('should return an object whose fields is an Array', function () {
    enumerationType('test', 'name', ['test']).fields.should.be.an.Array();
  });

  it('should return an object whose fields is length 0', function () {
    enumerationType('test', 'name', ['test']).fields.should.have.length(0);
  });

  it('should return an object whose traits is an Array', function () {
    enumerationType('test', 'name', ['test']).traits.should.be.an.Array();
  });

  it('should return an object whose traits is length 0', function () {
    enumerationType('test', 'name', ['test']).traits.should.have.length(0);
  });

  it('should return an object whose isInnerType is true', function () {
    enumerationType('test', 'name', ['test']).isInnerType.should.be.true();
  });

  it('should return an object whose values is specified array', function () {
    const values = ['test'];
    enumerationType('test', 'name', values).values.should.be.equal(values);
  });
});
