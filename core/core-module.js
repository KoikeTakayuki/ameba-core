let coreModule = module.exports = {};

let ModuleType = require('./types').Module,
    rootModule = require('./root-module');

coreModule._id = 'Core';
coreModule.id = coreModule._id;
coreModule.type = ModuleType;
coreModule.parentModule = rootModule;