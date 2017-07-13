const should = require('should');
const textField = require('../../').field.textField;
const TextType = require('../../').core.TextType;
const Field = require('../../').core.Field;

const testId = 'id';
const testName = 'name';
const testMaxLength = 10;
const testIsRequired = true;
const testDefault = 'default';
const testIsUnique = true;
const testValidator = () => 'test';
const testIsListType = true;

describe('textField', function () {
  it('should return an object', function () {
    textField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 4 properties', function () {
    Object.keys(textField(testId, testName)).should.have.length(4);
  });

  it('should return an object whose keys are ["type", "id", "name", "fieldType"]', function () {
    textField(testId, testName).should.have.keys('type', 'id', 'name', 'fieldType');
  });

  it('should return an object whose type is Field', function () {
    textField(testId, testName).should.have.property('type', Field);
  });

  it('should return an object whose id is given id', function () {
    textField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "name" property is given name', function () {
    textField(testId, testName).should.have.property('id', testId);
  });

  it('should return an object whose "fieldType" property is TextType.Text', function () {
    textField(testId, testName).should.have.property('fieldType', TextType.Text);
  });

  it('should return an object whose "maxLength" property is given maxLength if it is provided', function () {
    textField(testId, testName, { maxLength: testMaxLength }).should.have.property('maxLength', testMaxLength);
  });

  it('should return an object whose "isRequired" property is given isRequired if it is provided', function () {
    textField(testId, testName, { isRequired: testIsRequired }).should.have.property('isRequired', testIsRequired);
  });

  it('should return an object whose "default" property is given default if it is provided', function () {
    textField(testId, testName, { default: testDefault }).should.have.property('default', testDefault);
  });

  it('should return an object whose "isUnique" property is given isUnique if it is provided', function () {
    textField(testId, testName, { isUnique: testIsUnique }).should.have.property('isUnique', testIsRequired);
  });

  it('should return an object whose "validator" property is given validator if it is provided', function () {
    textField(testId, testName, { validator: testValidator }).should.have.property('validator', testValidator);
  });

  it('should return an object whose "isListType" property is given default if it is provided', function () {
    textField(testId, testName, { isListType: testIsListType }).should.have.property('isListType', testIsListType);
  });
});
