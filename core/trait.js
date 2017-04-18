let Types = require('./types');

module.exports = function (module, id, fields, args) {
    return {
        module: module,
        id: id,
        type: Types.Trait,
        fields: fields,
        traits: (args && args.traits) ? args.traits : []
    };
};