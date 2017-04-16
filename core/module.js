const Core = require('./core');

module.exports = function (id, parentModule) {
    if (!parentModule) {
        parentModule = Core.RootModule;
    }

    return {
        id: id,
        type: Core.Module,
        parentModule: parentModule
    };
};