const should = require('should');
const BooleanType = require('../../core/types').BooleanType;

describe('BooleanType', function () {
  it('should be an object', function () {
    BooleanType.should.be.an.Object();
  });

  it('should have 9 keys', function () {
    Object.keys(BooleanType).should.have.length(9);
  });

  it('should have keys: [_id, id, type, module, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    BooleanType.should.have.keys('_id', 'id', 'type', 'module', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "BooleanType"', function () {
      BooleanType.should.have.property('_id', 'BooleanType');
    });
  });

  describe('id', function () {
    it('should be "BooleanType"', function () {
      BooleanType.should.have.property('id', 'BooleanType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      BooleanType.type.should.be.an.Object();
    });

    it('should have id "RecordType"', function () {
      BooleanType.type.should.have.property('id', 'RecordType');
    });
  });

  describe('module', function () {
    it('should be an Object', function () {
      BooleanType.module.should.be.an.Object();
    });

    it('should have id "Core"', function () {
      BooleanType.module.should.have.property('id', 'Core');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      BooleanType.fields.should.be.an.Array();
    });

    it('should be empty', function () {
      BooleanType.fields.should.be.empty();
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      BooleanType.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      BooleanType.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      BooleanType.baseType.should.be.an.Object();
    });

    it('should have id "Record"', function () {
      BooleanType.baseType.should.have.property('id', 'Record');
    });
  });

  describe('isInnerType', function () {
    it('should be true', function () {
      BooleanType.isInnerType.should.be.true();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be true', function () {
      BooleanType.isPrimitiveType.should.be.true();
    });
  });
});
