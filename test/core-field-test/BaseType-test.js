let should = require('should'),
    baseTypeField = require('../../core/fields').baseType;

describe('baseTypeField', function () {

    it('should be an object', function () {
        baseTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(baseTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        baseTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "baseType"', function () {
            baseTypeField.should.have.property('id', 'baseType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            baseTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            baseTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            baseTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "RecordType"', function () {
            baseTypeField.fieldType.should.have.property('id', 'RecordType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            baseTypeField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            baseTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be an Object', function () {
            baseTypeField.defaultValue.should.be.an.Object();
        });

        it('should have id "Record"', function () {
            baseTypeField.defaultValue.should.have.property('id', 'Record');
        });
    });

});