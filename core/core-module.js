const coreModule = {};
const ModuleType = require('./types').Module;
const rootModule = require('./root-module');

module.exports = coreModule;

coreModule._id = 'Core';
coreModule.id = coreModule._id;
coreModule.type = ModuleType;
coreModule.parentModule = rootModule;
