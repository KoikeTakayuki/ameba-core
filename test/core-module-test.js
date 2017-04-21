const should = require('should');
const coreModule = require('../core/core-module');

describe('coreModule', function () {
  it('should be an Object', function () {
    coreModule.should.be.an.Object();
  });

  it('should have 4 keys', function () {
    Object.keys(coreModule).should.have.length(4);
  });

  it('should have keys: [_id, id, type, parentModule]', function () {
    coreModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', function () {
    it('should be "Core"', function () {
      coreModule.should.have.property('_id', 'Core');
    });
  });

  describe('id', function () {
    it('should be "Core"', function () {
      coreModule.should.have.property('id', 'Core');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      coreModule.type.should.be.an.Object();
    });

    it('should have id "Module"', function () {
      coreModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', function () {
    it('should be an Object', function () {
      coreModule.parentModule.should.be.an.Object();
    });

    it('should have id "Root"', function () {
      coreModule.parentModule.should.have.property('id', 'Root');
    });
  });
});
