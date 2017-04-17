let should = require('should'),
    RootModule = require('../core/root-module');

describe('RootModule', function() {

  it ('should be an object', function () {
    RootModule.should.be.an.Object();
  });

  it ('should have four keys', function () {
    Object.keys(RootModule).should.have.length(4);
  });

  it ('should have keys: [_id, id, type, parentModule]', function () {
    RootModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', function() {
    it('should be "Root"', function() {
      RootModule.should.have.property('_id', 'Root');
    });
  });

  describe('id', function() {
    it('should be "Root"', function() {
      RootModule.should.have.property('id', 'Root');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      RootModule.should.be.an.Object();
    });
  
    it('should have id "Module"', function () {
      RootModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', function() {
    it('should be null', function() {
      should.not.exist(RootModule.parentModule);
    });
  });

});