let should = require('should'),
    IsPrimitiveTypeField = require('../../core/core-field').IsPrimitiveType;

describe('IsPrimitiveTypeField', function () {

    it('should be an object', function () {
        IsPrimitiveTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(IsPrimitiveTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        IsPrimitiveTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "isPrimitiveType"', function () {
            IsPrimitiveTypeField.should.have.property('id', 'isPrimitiveType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            IsPrimitiveTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            IsPrimitiveTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            IsPrimitiveTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "BooleanType"', function () {
            IsPrimitiveTypeField.fieldType.should.have.property('id', 'BooleanType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            IsPrimitiveTypeField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            IsPrimitiveTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be false', function () {
            IsPrimitiveTypeField.defaultValue.should.be.false();
        });
    });

});