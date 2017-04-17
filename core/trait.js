let CoreType = require('./core-type');

module.exports = function (module, id, fields, args) {
    return {
        module: module,
        id: id,
        type: CoreType.Trait,
        fields: fields,
        traits: (args && args.traits) ? args.traits : []
    };
};