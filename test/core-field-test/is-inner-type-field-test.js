let should = require('should'),
    IsInnerTypeField = require('../../core/core-field').IsInnerType;

describe('IsInnerTypeField', function () {

    it('should be an object', function () {
        IsInnerTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(IsInnerTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        IsInnerTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "isInnerType"', function () {
            IsInnerTypeField.should.have.property('id', 'isInnerType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            IsInnerTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            IsInnerTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            IsInnerTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "BooleanType"', function () {
            IsInnerTypeField.fieldType.should.have.property('id', 'BooleanType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            IsInnerTypeField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            IsInnerTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be false', function () {
            IsInnerTypeField.defaultValue.should.be.false();
        });
    });

});