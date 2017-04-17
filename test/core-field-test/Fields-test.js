let should = require('should'),
    FieldsField = require('../../core/core-field').Fields;

describe('FieldsField', function () {

    it('should be an object', function () {
        FieldsField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(FieldsField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        FieldsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "fields"', function () {
            FieldsField.should.have.property('id', 'fields');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            FieldsField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            FieldsField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            FieldsField.fieldType.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            FieldsField.fieldType.should.have.property('id', 'Field');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            FieldsField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be true', function () {
            FieldsField.isListField.should.be.true();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(FieldsField.defaultValue, undefined);
        });
    });

});