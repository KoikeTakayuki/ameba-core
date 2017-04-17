let should = require('should'),
    TraitsField = require('../../core/core-field').Traits;

describe('TraitsField', function () {

    it('should be an object', function () {
        TraitsField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(TraitsField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        TraitsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "traits"', function () {
            TraitsField.should.have.property('id', 'traits');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            TraitsField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            TraitsField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            TraitsField.fieldType.should.be.an.Object();
        });

        it('should have id "Trait"', function () {
            TraitsField.fieldType.should.have.property('id', 'Trait');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            TraitsField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be true', function () {
            TraitsField.isListField.should.be.true();
        });
    });

    describe('defaultValue', function () {
        it('should be an Array', function () {
            TraitsField.defaultValue.should.be.an.Array();
        });

        it('should be empty', function () {
            TraitsField.defaultValue.should.be.empty();
        });
    });

});