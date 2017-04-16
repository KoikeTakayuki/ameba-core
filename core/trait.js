const Core = require('./core');

module.exports = function (module, id, fields, args) {
    return {
        module: module,
        id: id,
        type: Core.Trait,
        fields: fields,
        traits: (args && args.traits) ? args.traits : []
    };
};