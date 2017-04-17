let CoreModule = module.exports = {};

let ModuleType = require('./core-type').Module,
    RootModule = require('./root-module');

CoreModule._id = 'Core';
CoreModule.id = CoreModule._id;
CoreModule.type = ModuleType;
CoreModule.parentModule = RootModule;