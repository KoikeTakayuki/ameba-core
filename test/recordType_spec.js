const should = require('should');
const Record = require('../').core.Record;
const RecordType = require('../').core.RecordType;
const textField = require('../').field.textField;
const recordType = require('../').recordType;

const testId = 'testId';
const testName = 'testName';
const testFields = [textField('test', 'test')];

describe('recordType', function () {
  it('should return an object', function () {
    recordType(testId, testName, testFields).should.be.an.Object();
  });

  it('should return an object which has 6 properties', function () {
    Object.keys(recordType(testId, testName, testFields)).should.have.length(6);
  });

  it('should return an object whose keys are ["type", "id", "name", "fields", "baseType", "isInnerType"]', function () {
    recordType(testId, testName, testFields).should.have.keys('type', 'id', 'name', 'fields', 'baseType', 'isInnerType');
  });

  it('should return an object whose type is Field', function () {
    recordType(testId, testName, testFields).should.have.property('type', RecordType);
  });

  it('should return an object whose id is given id', function () {
    recordType(testId, testName, testFields).should.have.property('id', testId);
  });

  it('should return an object whose name is given name', function () {
    recordType(testId, testName, testFields).should.have.property('name', testName);
  });

  it('should return an object whose fields is given fields', function () {
    recordType(testId, testName, testFields).should.have.property('fields', testFields);
  });

  it('should return an object whose baseType is Record', function () {
    recordType(testId, testName, testFields).should.have.property('baseType', Record);
  });

  it('should return an object whose isInnerType is false', function () {
    recordType(testId, testName, testFields).should.have.property('isInnerType', false);
  });
});
