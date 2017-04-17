let should = require('should'),
    Record = require('../core/core-type').Record;
console.log(Record)

describe('Record', function() {

  it ('should be an object', function () {
    Record.should.be.an.Object();
  });

  it ('should have 9 keys', function () {
    Object.keys(Record).should.have.length(9);
  });

  it ('should have keys: [_id, id, type]', function () {
    Record.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function() {
    it('should be "Record"', function() {
      Record.should.have.property('_id', 'Record');
    });
  });

  describe('id', function() {
    it('should be "Record"', function() {
      Record.should.have.property('id', 'Record');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      Record.type.should.be.an.Object();
    });
  
    it('should be RecordType', function () {
      Record.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function() {
    it('should be an Object', function() {
      Record.module.should.be.an.Object();
    });

    it('should be CoreModule', function () {
      Record.module.should.have.property('id', 'Core');
    });
  });

});