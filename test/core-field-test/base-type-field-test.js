let should = require('should'),
    BaseTypeField = require('../../core/core-field').BaseType;

describe('BaseTypeField', function () {

    it('should be an object', function () {
        BaseTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(BaseTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        BaseTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "baseType"', function () {
            BaseTypeField.should.have.property('id', 'baseType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            BaseTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            BaseTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            BaseTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "RecordType"', function () {
            BaseTypeField.fieldType.should.have.property('id', 'RecordType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            BaseTypeField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            BaseTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be an Object', function () {
            BaseTypeField.defaultValue.should.be.an.Object();
        });

        it('should have id "Record"', function () {
            BaseTypeField.defaultValue.should.have.property('id', 'Record');
        });
    });

});