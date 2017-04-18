const should = require('should');
const rootModule = require('../core/root-module');

describe('rootModule', () => {
  it('should be an Object', () => {
    rootModule.should.be.an.Object();
  });

  it('should have 4 keys', () => {
    Object.keys(rootModule).should.have.length(4);
  });

  it('should have keys: [_id, id, type, parentModule]', () => {
    rootModule.should.have.keys('_id', 'id', 'type', 'parentModule');
  });

  describe('_id', () => {
    it('should be "Root"', () => {
      rootModule.should.have.property('_id', 'Root');
    });
  });

  describe('id', () => {
    it('should be "Root"', () => {
      rootModule.should.have.property('id', 'Root');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      rootModule.type.should.be.an.Object();
    });

    it('should have id "Module"', () => {
      rootModule.type.should.have.property('id', 'Module');
    });
  });

  describe('parentModule', () => {
    it('should be null', () => {
      should.equal(rootModule.parentModule, null);
    });
  });
});
