const should = require('should');
const textField = require('../../').field.textField;
const TextType = require('../../').type.TextType;

const testId = 'id';
const testName = 'name';
const testMaxLength = 10;
const testIsRequired = true;
const testIsUnique = true;
const testValidator = () => 'test';
const testFieldType = TextType.LongText;

describe('textField', function () {
  it('should return an object', function () {
    textField(testId, testName).should.be.an.Object();
  });

  it('should return an object which has 3 properties', function () {
    Object.keys(textField(testId, testName)).should.have.length(3);
  });

  it('should return an object whose keys are ["id", "name", "fieldType"]', function () {
    textField(testId, testName).should.have.keys('id', 'name', 'fieldType');
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

  it('should return an object whose "isUnique" property is given isUnique if it is provided', function () {
    textField(testId, testName, { isUnique: testIsUnique }).should.have.property('isUnique', testIsRequired);
  });

  it('should return an object whose "validator" property is given validator if it is provided', function () {
    textField(testId, testName, { validator: testValidator }).should.have.property('validator', testValidator);
  });

  it('should return an object whose "fieldType" property is given fieldType if it is provided', function () {
    textField(testId, testName, { fieldType: testFieldType }).should.have.property('fieldType', testFieldType);
  });
});
