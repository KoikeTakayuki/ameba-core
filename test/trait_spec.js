const should = require('should');
const Trait = require('../').core.Trait;
const trait = require('../').trait;
const textField = require('../').field.textField;

const testId = 'testId';
const testName = 'testName';
const testFields = [textField('test', 'test')];

describe('trait', function () {
  it('should return an object', function () {
    trait(testId, testName, testFields).should.be.an.Object();
  });

  it('should return an object which has 4 keys', function () {
    Object.keys(trait(testId, testName, testFields)).should.have.length(4);
  });

  it('should return an object whose keys are ["type", "id", "name", "fields"]', function () {
    trait(testId, testName, testFields).should.have.keys('type', 'id', 'name', 'fields');
  });

  it('should return an object whose type is Trait', function () {
    trait(testId, testName, testFields).should.have.property('type', Trait);
  });

  it('should return an object whose id is given id', function () {
    trait(testId, testName, testFields).should.have.property('id', testId);
  });

  it('should return an object whose name is given id', function () {
    trait(testId, testName, testFields).should.have.property('name', testName);
  });

  it('should return an object whose fields are given fields', function () {
    trait(testId, testName, testFields).should.have.property('fields', testFields);
  });
});
