const Core = require('./core');

module.exports = function (id, parentModule) {
    if (!parentModule) {
        parentModule = Core;
    }

    return {
        id: id,
        type: Core.Module,
        parentModule: parentModule
    };
};