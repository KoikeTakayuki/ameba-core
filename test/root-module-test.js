let should = require('should'),
    rootModule = require('../core/root-module');

describe('rootModule', function() {

  it ('should be an Object', function () {
    rootModule.should.be.an.Object();
  });

  it ('should have 4 keys', function () {
    Object.keys(rootModule).should.have.length(4);
  });

  it ('should have keys: [_id, id, type, parentModule]', function () {
    rootModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', function() {
    it('should be "Root"', function() {
      rootModule.should.have.property('_id', 'Root');
    });
  });

  describe('id', function() {
    it('should be "Root"', function() {
      rootModule.should.have.property('id', 'Root');
    });
  });

  describe('type', function() {
    it('should be an Object', function() {
      rootModule.type.should.be.an.Object();
    });
  
    it('should have id "Module"', function () {
      rootModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', function() {
    it('should be null', function() {
      should.equal(rootModule.parentModule, null);
    });
  });

});