let should = require('should'),
    traitsField = require('../../core/fields').traits;

describe('traitsField', function () {

    it('should be an object', function () {
        traitsField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(traitsField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        traitsField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "traits"', function () {
            traitsField.should.have.property('id', 'traits');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            traitsField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            traitsField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            traitsField.fieldType.should.be.an.Object();
        });

        it('should have id "Trait"', function () {
            traitsField.fieldType.should.have.property('id', 'Trait');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            traitsField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be true', function () {
            traitsField.isListField.should.be.true();
        });
    });

    describe('defaultValue', function () {
        it('should be an Array', function () {
            traitsField.defaultValue.should.be.an.Array();
        });

        it('should be empty', function () {
            traitsField.defaultValue.should.be.empty();
        });
    });

});