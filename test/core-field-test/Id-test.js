let should = require('should'),
    IdField = require('../../core/core-field').Id;

describe('IdField', function () {

    it('should be an object', function () {
        IdField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(IdField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        IdField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "id"', function () {
            IdField.should.have.property('id', 'id');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            IdField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            IdField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            IdField.fieldType.should.be.an.Object();
        });

        it('should have id "TextType"', function () {
            IdField.fieldType.should.have.property('id', 'TextType');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            IdField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            IdField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(IdField.defaultValue, undefined);
        });
    });

});