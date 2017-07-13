const should = require('should');
const booleanField = require('../../').field.booleanField;
const BooleanType = require('../../').core.BooleanType;
const Field = require('../../').core.Field;

const testId = 'id';
const testName = 'name';
const testIsRequired = true;
const testDefault = true;
const testIsListType = true;

describe('booleanField', function () {
  it('should return an object', function () {
    booleanField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 4 properties', function () {
    Object.keys(booleanField(testId, testName)).should.have.length(4);
  });

  it('should return an object whose keys are ["type", "id", "name", "fieldType"]', function () {
    booleanField(testId, testName).should.have.keys('type', 'id', 'name', 'fieldType');
  });

  it('should return an object whose type is Field', function () {
    booleanField(testId, testName).should.have.property('type', Field);
  });

  it('should return an object whose id is given id', function () {
    booleanField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "name" property is given name', function () {
    booleanField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "fieldType" property is numberType.Real', function () {
    booleanField(testId, testName).should.have.property('fieldType', BooleanType);
  });

  it('should return an object whose "isRequired" property is given isRequired if it is provided', function () {
    booleanField(testId, testName, { isRequired: testIsRequired }).should.have.property('isRequired', testIsRequired);
  });

  it('should return an object whose "default" property is given default if it is provided', function () {
    booleanField(testId, testName, { default: testDefault }).should.have.property('default', testDefault);
  });

  it('should return an object whose "isListType" property is given default if it is provided', function () {
    booleanField(testId, testName, { isListType: testIsListType }).should.have.property('isListType', testIsListType);
  });
});
