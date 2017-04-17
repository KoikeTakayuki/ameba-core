let should = require('should'),
    DefaultValueField = require('../../core/core-field').DefaultValue;

describe('DefaultValueField', function () {

    it('should be an object', function () {
        DefaultValueField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(DefaultValueField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        DefaultValueField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "defaultValue"', function () {
            DefaultValueField.should.have.property('id', 'defaultValue');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            DefaultValueField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            DefaultValueField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            DefaultValueField.fieldType.should.be.an.Object();
        });

        it('should have id "Record"', function () {
            DefaultValueField.fieldType.should.have.property('id', 'Record');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            DefaultValueField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            DefaultValueField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(DefaultValueField.defaultValue, undefined);
        });
    });

});