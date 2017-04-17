let should = require('should'),
    ModuleField = require('../../core/core-field').Module;

describe('ModuleField', function () {

    it('should be an object', function () {
        ModuleField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(ModuleField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        ModuleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "module"', function () {
            ModuleField.should.have.property('id', 'module');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            ModuleField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            ModuleField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            ModuleField.fieldType.should.be.an.Object();
        });

        it('should have id "Module"', function () {
            ModuleField.fieldType.should.have.property('id', 'Module');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            ModuleField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            ModuleField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(ModuleField.defaultValue, undefined);
        });
    });

});