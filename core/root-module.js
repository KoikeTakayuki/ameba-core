let RootModule = module.exports = {};

let ModuleType = require('./core-type').Module;

RootModule._id = 'Root';
RootModule.id = RootModule._id;
RootModule.type = ModuleType;
RootModule.parentModule = null;