const should = require('should');
const Record = require('../../core/types').Record;

describe('Record', () => {
  it('should be an object', () => {
    Record.should.be.an.Object();
  });

  it('should have 9 keys', () => {
    Object.keys(Record).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', () => {
    Record.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', () => {
    it('should be "Record"', () => {
      Record.should.have.property('_id', 'Record');
    });
  });

  describe('id', () => {
    it('should be "Record"', () => {
      Record.should.have.property('id', 'Record');
    });
  });

  describe('type', () => {
    it('should be an Object', () => {
      Record.type.should.be.an.Object();
    });

    it('should have id "RecordType"', () => {
      Record.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', () => {
    it('should be an Object', () => {
      Record.module.should.be.an.Object();
    });

    it('should have id "Core"', () => {
      Record.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', () => {
    it('should be an Array', () => {
      Record.fields.should.be.an.Array();
    });

    it('should have 2 elements', () => {
      Record.fields.should.be.length(2);
    });
  });

  describe('traits', () => {
    it('should be an Array', () => {
      Record.traits.should.be.an.Array();
    });

    it('should be empty', () => {
      Record.traits.should.be.empty();
    });
  });

  describe('baseType', () => {
    it('should be an Object', () => {
      Record.baseType.should.be.an.Object();
    });

    it('should have id "Record"', () => {
      Record.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', () => {
    it('should be false', () => {
      Record.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', () => {
    it('should be false', () => {
      Record.isPrimitiveType.should.be.false();
    });
  });
});
