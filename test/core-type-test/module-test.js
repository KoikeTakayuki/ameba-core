const should = require('should');
const Module = require('../../core/types').Module;

describe('Module', () => {
  it('should be an object', () => {
    Module.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(Module).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    Module.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "Module"', () => {
      Module.should.have.property('_id', 'Module');
    });
  });

  describe('id', () => {
    it('should be "Module"', () => {
      Module.should.have.property('id', 'Module');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      Module.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      Module.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      Module.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      Module.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      Module.fields.should.be.an.Array();
    });

    it('should have 1 elements', () => {
      Module.fields.should.be.length(1);
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      Module.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      Module.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      Module.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      Module.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be false', () => {
      Module.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be false', () => {
      Module.isPrimitiveType.should.be.false();
    });
  });
});
