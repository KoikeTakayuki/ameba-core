const Core = require('./core');

module.exports = function (module, id, fields, args) {
    return {
        module: module,
        id: id,
        type: Core.Trait,
        fields: fields,
        baseType: (args && args.baseType) ? args.baseType : Core.Record,
        traits: (args && args.traits) ? args.traits : []
    };
};