const should = require('should');
const Record = require('../../index').Types.Record;

describe('Record', function () {
  it('should be an object', function () {
    Record.should.be.an.Object();
  });

  it('should have 9 keys', function () {
    Object.keys(Record).should.have.length(9);
  });

  it('should have keys: [_id, type, id, name, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Record.should.have.keys('_id', 'type', 'id', 'name', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.Record"', function () {
      Record.should.have.property('_id', 'Core.Record');
    });
  });

  describe('id', function () {
    it('should be "Core.Record"', function () {
      Record.should.have.property('id', 'Core.Record');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      Record.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      Record.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      Record.fields.should.be.an.Array();
    });

    it('should have 1 elements', function () {
      Record.fields.should.be.length(1);
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      Record.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      Record.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      Record.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      Record.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be false', function () {
      Record.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be false', function () {
      Record.isPrimitiveType.should.be.false();
    });
  });
});
