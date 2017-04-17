let should = require('should'),
    IsRequiredField = require('../../core/core-field').IsRequired;

describe('IsRequiredField', function () {

    it('should be an object', function () {
        IsRequiredField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(IsRequiredField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        IsRequiredField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "isRequired"', function () {
            IsRequiredField.should.have.property('id', 'isRequired');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            IsRequiredField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            IsRequiredField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            IsRequiredField.fieldType.should.be.an.Object();
        });

        it('should have id "BooleanType"', function () {
            IsRequiredField.fieldType.should.have.property('id', 'BooleanType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            IsRequiredField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            IsRequiredField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be false', function () {
            IsRequiredField.defaultValue.should.be.false();
        });
    });

});