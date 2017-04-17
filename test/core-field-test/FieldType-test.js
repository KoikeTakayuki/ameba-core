let should = require('should'),
    FieldTypeField = require('../../core/core-field').FieldType;

describe('FieldTypeField', function () {

    it('should be an object', function () {
        FieldTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(FieldTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        FieldTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "fieldType"', function () {
            FieldTypeField.should.have.property('id', 'fieldType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            FieldTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            FieldTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            FieldTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "RecordType"', function () {
            FieldTypeField.fieldType.should.have.property('id', 'RecordType');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            FieldTypeField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            FieldTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(FieldTypeField.defaultValue, undefined);
        });
    });

});