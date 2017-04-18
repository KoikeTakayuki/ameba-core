let should = require('should'),
    fieldTypeField = require('../../core/fields').fieldType;

describe('fieldTypeField', function () {

    it('should be an object', function () {
        fieldTypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(fieldTypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        fieldTypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "fieldType"', function () {
            fieldTypeField.should.have.property('id', 'fieldType');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            fieldTypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            fieldTypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            fieldTypeField.fieldType.should.be.an.Object();
        });

        it('should have id "RecordType"', function () {
            fieldTypeField.fieldType.should.have.property('id', 'RecordType');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            fieldTypeField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            fieldTypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(fieldTypeField.defaultValue, undefined);
        });
    });

});