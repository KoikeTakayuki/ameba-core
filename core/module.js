let CoreType = require('./core-type');

module.exports = function (id, parentModule) {
    if (!parentModule) {
        parentModule = CoreType.RootModule;
    }

    return {
        id: id,
        type: CoreType.Module,
        parentModule: parentModule
    };
};