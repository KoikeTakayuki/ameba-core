let should = require('should'),
    moduleField = require('../../core/fields').module;

describe('moduleField', function () {

    it('should be an object', function () {
        moduleField.should.be.an.Object();
    });

    it('should have 6 keys', function () {
        Object.keys(moduleField).should.have.length(6);
    });

    it('should have keys: [id, type, fieldType, isRequired, isListField, defaultValue]', function () {
        moduleField.should.have.keys('id', 'type', 'fieldType', 'isRequired', 'isListField', 'defaultValue');
    });

    describe('id', function () {
        it('should be "module"', function () {
            moduleField.should.have.property('id', 'module');
        });
    });

    describe('type', function () {
        it('should be an Object', function () {
            moduleField.type.should.be.an.Object();
        });

        it('should have id "Field"', function () {
            moduleField.type.should.have.property('id', 'Field');
        });
    });

    describe('fieldType', function () {
        it('should be an Object', function () {
            moduleField.fieldType.should.be.an.Object();
        });

        it('should have id "Module"', function () {
            moduleField.fieldType.should.have.property('id', 'Module');
        });
    });

    describe('isRequired', function () {
        it('should be true', function () {
            moduleField.isRequired.should.be.true();
        });
    });

    describe('isListField', function () {
        it('should be false', function () {
            moduleField.isListField.should.be.false();
        });
    });

    describe('defaultValue', function () {
        it('should be undefined', function () {
            should.equal(moduleField.defaultValue, undefined);
        });
    });

});