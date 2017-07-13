const should = require('should');
const booleanField = require('../../').field.booleanField;
const BooleanType = require('../../').core.BooleanType;

const testId = 'id';
const testName = 'name';
const testIsRequired = true;

describe('booleanField', function () {
  it('should return an object', function () {
    booleanField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 3 properties', function () {
    Object.keys(booleanField(testId, testName)).should.have.length(3);
  });

  it('should return an object whose keys are ["id", "name", "fieldType"]', function () {
    booleanField(testId, testName).should.have.keys('id', 'name', 'fieldType');
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
});
