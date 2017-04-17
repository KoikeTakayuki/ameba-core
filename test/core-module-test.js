let should = require('should'),
    CoreModule = require('../core/core-module');

describe('CoreModule', function() {

  it ('should be an Object', function () {
    CoreModule.should.be.an.Object();
  });

  it ('should have 4 keys', function () {
    Object.keys(CoreModule).should.have.length(4);
  });

  it ('should have keys: [_id, id, type, parentModule]', function () {
    CoreModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', function() {
    it('should be "Core"', function() {
      CoreModule.should.have.property('_id', 'Core');
    });
  });

  describe('id', function() {
    it('should be "Core"', function() {
      CoreModule.should.have.property('id', 'Core');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      CoreModule.type.should.be.an.Object();
    });

    it('should have id "Module"', function () {
      CoreModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', function() {
    it('should be an Object', function() {
      CoreModule.parentModule.should.be.an.Object();
    });

    it('should have id "RootModule"', function() {
      CoreModule.parentModule.should.have.property('id', 'Root');
    });
  });

});