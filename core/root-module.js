let rootModule = module.exports = {};

let ModuleType = require('./types').Module;

rootModule._id = 'Root';
rootModule.id = rootModule._id;
rootModule.type = ModuleType;
rootModule.parentModule = null;