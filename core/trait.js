const Types = require('./types');

function trait(module, id, fields, args) {
  return {
    module,
    id,
    type: Types.Trait,
    fields,
    traits: (args && args.traits) ? args.traits : [],
  };
}

module.exports = trait;
