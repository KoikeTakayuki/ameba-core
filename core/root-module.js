const rootModule = {};
const ModuleType = require('./types').Module;

module.exports = rootModule;

rootModule._id = 'Root';
rootModule.id = rootModule._id;
rootModule.type = ModuleType;
rootModule.parentModule = null;
