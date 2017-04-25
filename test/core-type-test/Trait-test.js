const should = require('should');
const Trait = require('../../index').Types.Trait;

describe('Trait', function () {
  it('should be an object', function () {
    Trait.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(Trait).should.have.length(8);
  });

  it('should have keys: [_id, id, type, fields, traits, baseType, isInnerType, isPrimitiveType]', function () {
    Trait.should.have.keys('_id', 'id', 'type', 'fields', 'traits', 'baseType', 'isInnerType', 'isPrimitiveType');
  });

  describe('_id', function () {
    it('should be "Core.Trait"', function () {
      Trait.should.have.property('_id', 'Core.Trait');
    });
  });

  describe('id', function () {
    it('should be "Core.Trait"', function () {
      Trait.should.have.property('id', 'Core.Trait');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      Trait.type.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      Trait.type.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('fields', function () {
    it('should be an Array', function () {
      Trait.fields.should.be.an.Array();
    });

    it('should have 2 elements', function () {
      Trait.fields.should.be.length(2);
    });
  });

  describe('traits', function () {
    it('should be an Array', function () {
      Trait.traits.should.be.an.Array();
    });

    it('should be empty', function () {
      Trait.traits.should.be.empty();
    });
  });

  describe('baseType', function () {
    it('should be an Object', function () {
      Trait.baseType.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      Trait.baseType.should.have.property('id', 'Core.Record');
    });
  });

  describe('isInnerType', function () {
    it('should be false', function () {
      Trait.isInnerType.should.be.false();
    });
  });

  describe('isPrimitiveType', function () {
    it('should be false', function () {
      Trait.isPrimitiveType.should.be.false();
    });
  });
});
