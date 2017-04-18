const should = require('should');
const coreModule = require('../core/core-module');

describe('coreModule', () => {
  it('should be an Object', () => {
    coreModule.should.be.an.Object();
  });

  it('should have 4 keys', () => {
    Object.keys(coreModule).should.have.length(4);
  });

  it('should have keys: [_id, id, type, parentModule]', () => {
    coreModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', () => {
    it('should be "Core"', () => {
      coreModule.should.have.property('_id', 'Core');
    });
  });

  describe('id', () => {
    it('should be "Core"', () => {
      coreModule.should.have.property('id', 'Core');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      coreModule.type.should.be.an.Object();
    });

    it('should have id "Module"', () => {
      coreModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', () => {
    it('should be an Object', () => {
      coreModule.parentModule.should.be.an.Object();
    });

    it('should have id "Root"', () => {
      coreModule.parentModule.should.have.property('id', 'Root');
    });
  });
});
