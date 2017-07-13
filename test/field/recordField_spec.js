const should = require('should');
const recordField = require('../../').field.recordField;
const core = require('../../').core;

const Field = core.Field;
const Record = core.Record;

const testId = 'id';
const testName = 'name';
const testRecordType = Record;
const testIsRequired = true;
const testDefault = 'default';
const testIsUnique = true;
const testValidator = () => 'test';
const testIsListType = true;

describe('recordField', function () {
  it('should return an object', function () {
    recordField(testId, testName, testRecordType).should.be.an.Object();
  });

  it('should return an object which has 4 properties', function () {
    Object.keys(recordField(testId, testName, testRecordType)).should.have.length(4);
  });

  it('should return an object whose keys are ["type", "id", "name", "fieldType"]', function () {
    recordField(testId, testName, testRecordType).should.have.keys('type', 'id', 'name', 'fieldType');
  });

  it('should return an object whose type is Field', function () {
    recordField(testId, testName, testRecordType).should.have.property('type', Field);
  });

  it('should return an object whose id is given id', function () {
    recordField(testId, testName, testRecordType).should.have.property('id', testId);
  });

  it('should return an object whose "name" property is given name', function () {
    recordField(testId, testName, testRecordType).should.have.property('id', testId);
  });

  it('should return an object whose "fieldType" property is given record type', function () {
    recordField(testId, testName, testRecordType).should.have.property('fieldType', testRecordType);
  });

  it('should return an object whose "isRequired" property is given isRequired if it is provided', function () {
    recordField(testId, testName, testRecordType, { isRequired: testIsRequired }).should.have.property('isRequired', testIsRequired);
  });

  it('should return an object whose "default" property is given default if it is provided', function () {
    recordField(testId, testName, testRecordType, { default: testDefault }).should.have.property('default', testDefault);
  });

  it('should return an object whose "isUnique" property is given isUnique if it is provided', function () {
    recordField(testId, testName, testRecordType, { isUnique: testIsUnique }).should.have.property('isUnique', testIsRequired);
  });

  it('should return an object whose "validator" property is given validator if it is provided', function () {
    recordField(testId, testName, testRecordType, { validator: testValidator }).should.have.property('validator', testValidator);
  });

  it('should return an object whose "isListType" property is given default if it is provided', function () {
    recordField(testId, testName, testRecordType, { isListType: testIsListType }).should.have.property('isListType', testIsListType);
  });
});
