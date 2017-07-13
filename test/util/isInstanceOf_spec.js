const should = require('should');
const isInstanceOf = require('../../').util.isInstanceOf;
const core = require('../../').core;

describe('isInstanceOf', function () {
  it('should return true if value is true and BooleanType is specified as a type', function () {
    isInstanceOf(true, core.BooleanType).should.be.true();
  });

  it('should return true if value is false and BooleanType is specified as a type', function () {
    isInstanceOf(false, core.BooleanType).should.be.true();
  });

  it('should return false if value is not integer and BooleanType is specified as a type', function () {
    isInstanceOf('string', core.BooleanType).should.be.false();
  });

  it('should return true if value is integer and NumberType.Integer is specified as a type', function () {
    isInstanceOf(1, core.NumberType.Integer).should.be.true();
  });

  it('should return false if value is decimal number and NumberType.Integer is specified as a type', function () {
    isInstanceOf(1.1, core.NumberType.Integer).should.be.false();
  });

  it('should return false if value is not integer and NumberType.Integer is specified as a type', function () {
    isInstanceOf('string', core.NumberType.Integer).should.be.false();
  });

  it('should return true if value is integer and NumberType.Real is specified as a type', function () {
    isInstanceOf(1.1, core.NumberType.Real).should.be.true();
  });

  it('should return true if value is decimal number and NumberType.Real is specified as a type', function () {
    isInstanceOf(1.0, core.NumberType.Real).should.be.true();
  });

  it('should return false if value is not integer and NumberType.Integer is specified as a type', function () {
    isInstanceOf('string', core.NumberType.Real).should.be.false();
  });

  it('should return true if value is string and TextType.Text is specified as a type', function () {
    isInstanceOf('string', core.TextType.Text).should.be.true();
  });

  it('should return false if value is not string and TextType.Text is specified as a type', function () {
    isInstanceOf(1, core.TextType.Text).should.be.false();
  });

  it('should return true if value is string and TextType.LongText is specified as a type', function () {
    isInstanceOf('string', core.TextType.LongText).should.be.true();
  });

  it('should return false if value is not string and TextType.LongText is specified as a type', function () {
    isInstanceOf(1, core.TextType.LongText).should.be.false();
  });

  it('should return true if value is string and TextType.RichText is specified as a type', function () {
    isInstanceOf('string', core.TextType.RichText).should.be.true();
  });

  it('should return false if value is not string and TextType.RichText is specified as a type', function () {
    isInstanceOf(1, core.TextType.RichText).should.be.false();
  });

  it('should return true if value is Date and DateType.Date is specified as a type', function () {
    isInstanceOf(new Date(), core.DateType.Date).should.be.true();
  });

  it('should return false if value is not Date and DateType.Date is specified as a type', function () {
    isInstanceOf('string', core.DateType.Date).should.be.false();
  });

  it('should return true if value is Date and DateType.Time is specified as a type', function () {
    isInstanceOf(new Date(), core.DateType.Time).should.be.true();
  });

  it('should return false if value is not Date and DateType.Time is specified as a type', function () {
    isInstanceOf('string', core.DateType.Time).should.be.false();
  });

  it('should return true if value is Date and DateType.DateTime is specified as a type', function () {
    isInstanceOf(new Date(), core.DateType.DateTime).should.be.true();
  });

  it('should return false if value is not Date and DateType.Time is specified as a type', function () {
    isInstanceOf('string', core.DateType.DateTime).should.be.false();
  });

  it('should return true if value is function and FunctionType is specified as a type', function () {
    isInstanceOf(() => {}, core.FunctionType).should.be.true();
  });

  it('should return false if value is not function and FunctionType is specified as a type', function () {
    isInstanceOf('test', core.FunctionType).should.be.false();
  });
});
