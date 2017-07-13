const should = require('should');
const functionField = require('../../').field.functionField;
const FunctionType = require('../../').core.FunctionType;
const Field = require('../../').core.Field;

const testId = 'id';
const testName = 'name';
const testIsRequired = true;
const testDefault = 'default';
const testValidator = () => 'test';
const testIsListType = true;

describe('functionField', function () {
  it('should return an object', function () {
    functionField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 4 properties', function () {
    Object.keys(functionField(testId, testName)).should.have.length(4);
  });

  it('should return an object whose keys are ["type", "id", "name", "fieldType"]', function () {
    functionField(testId, testName).should.have.keys('type', 'id', 'name', 'fieldType');
  });

  it('should return an object whose type is Field', function () {
    functionField(testId, testName).should.have.property('type', Field);
  });

  it('should return an object whose id is given id', function () {
    functionField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "name" property is given name', function () {
    functionField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "fieldType" property is FunctionType', function () {
    functionField(testId, testName).should.have.property('fieldType', FunctionType);
  });

  it('should return an object whose "isRequired" property is given isRequired if it is provided', function () {
    functionField(testId, testName, { isRequired: testIsRequired }).should.have.property('isRequired', testIsRequired);
  });

  it('should return an object whose "default" property is given default if it is provided', function () {
    functionField(testId, testName, { default: testDefault }).should.have.property('default', testDefault);
  });

  it('should return an object whose "validator" property is given validator if it is provided', function () {
    functionField(testId, testName, { validator: testValidator }).should.have.property('validator', testValidator);
  });

  it('should return an object whose "isListType" property is given default if it is provided', function () {
    functionField(testId, testName, { isListType: testIsListType }).should.have.property('isListType', testIsListType);
  });
});
