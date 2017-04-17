let should = require('should'),
    TypeField = require('../../core/core-field').Type;

describe('TypeField', function () {

    it('should be an object', function () {
        TypeField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(TypeField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        TypeField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "type"', function () {
            TypeField.should.have.property('id', 'type');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            TypeField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            TypeField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            TypeField.fieldType.should.be.an.Object();
        });

        it('should have id "RecordType"', function () {
            TypeField.fieldType.should.have.property('id', 'RecordType');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            TypeField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            TypeField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(TypeField.defaultValue, undefined);
        });
    });

});