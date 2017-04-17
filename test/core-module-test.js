let should = require('should'),
    CoreModule = require('../core/core-module');

describe('CoreModule', function() {

  it ('should be an object', function () {
    CoreModule.should.be.an.Object();
  });

  it ('should have four keys', function () {
    Object.keys(CoreModule).should.have.length(4);
  });

  it ('should have keys: [_id, id, type, parentModule]', function () {
    CoreModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', function() {
    it('should be "Root"', function() {
      CoreModule.should.have.property('_id', 'Root');
    });
  });

  describe('id', function() {
    it('should be "Root"', function() {
      CoreModule.should.have.property('id', 'Root');
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
    it('should be null', function() {
      should.not.exist(CoreModule.parentModule);
    });
  });

});