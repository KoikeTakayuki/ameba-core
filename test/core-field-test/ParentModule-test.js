let should = require('should'),
    ParentModuleField = require('../../core/core-field').ParentModule;

describe('ParentModuleField', function () {

    it('should be an object', function () {
        ParentModuleField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(ParentModuleField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        ParentModuleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "parentModule"', function () {
            ParentModuleField.should.have.property('id', 'parentModule');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            ParentModuleField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            ParentModuleField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            ParentModuleField.fieldType.should.be.an.Object();
        });

        it('should have id "Module"', function () {
            ParentModuleField.fieldType.should.have.property('id', 'Module');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            ParentModuleField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            ParentModuleField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(ParentModuleField.defaultValue, undefined);
        });
    });

});