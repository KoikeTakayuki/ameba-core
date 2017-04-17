let should = require('should'),
    IsListFieldField = require('../../core/core-field').IsListField;

describe('IsListFieldField', function () {

    it('should be an object', function () {
        IsListFieldField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(IsListFieldField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        IsListFieldField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "isListField"', function () {
            IsListFieldField.should.have.property('id', 'isListField');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            IsListFieldField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            IsListFieldField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            IsListFieldField.fieldType.should.be.an.Object();
        });

        it('should have id "BooleanType"', function () {
            IsListFieldField.fieldType.should.have.property('id', 'BooleanType');
        });
    });

    describe('isRequired', function () {
        it('should be false', function () {
            IsListFieldField.isRequired.should.be.false();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            IsListFieldField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be false', function () {
            IsListFieldField.defaultValue.should.be.false();
        });
    });

});