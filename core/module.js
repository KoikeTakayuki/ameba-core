let Types = require('./types');

module.exports = function (id, parentModule) {
    if (!parentModule) {
        parentModule = Types.rootModule;
    }

    return {
        id: id,
        type: Types.Module,
        parentModule: parentModule
    };
};