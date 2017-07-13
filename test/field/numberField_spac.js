const should = require('should');
const numberField = require('../../').field.numberField;
const NumberType = require('../../').core.NumberType;

const testId = 'id';
const testName = 'name';
const testIsRequired = true;
const testIsUnique = true;
const testValidator = () => 'test';
const testFieldType = NumberType.Real;

describe('numberField', function () {
  it('should return an object', function () {
    numberField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 3 properties', function () {
    Object.keys(numberField(testId, testName)).should.have.length(3);
  });

  it('should return an object whose keys are ["id", "name", "fieldType"]', function () {
    numberField(testId, testName).should.have.keys('id', 'name', 'fieldType');
  });

  it('should return an object whose id is given id', function () {
    numberField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "name" property is given name', function () {
    numberField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "fieldType" property is numberType.Real', function () {
    numberField(testId, testName).should.have.property('fieldType', NumberType.Real);
  });

  it('should return an object whose "isRequired" property is given isRequired if it is provided', function () {
    numberField(testId, testName, { isRequired: testIsRequired }).should.have.property('isRequired', testIsRequired);
  });

  it('should return an object whose "isUnique" property is given isUnique if it is provided', function () {
    numberField(testId, testName, { isUnique: testIsUnique }).should.have.property('isUnique', testIsRequired);
  });

  it('should return an object whose "validator" property is given validator if it is provided', function () {
    numberField(testId, testName, { validator: testValidator }).should.have.property('validator', testValidator);
  });

  it('should return an object whose "fieldType" property is given fieldType if it is provided', function () {
    numberField(testId, testName, { fieldType: testFieldType }).should.have.property('fieldType', testFieldType);
  });
});
