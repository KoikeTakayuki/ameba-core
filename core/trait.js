const Types = require('./types');

function trait(id, fields, args) {
  return {
    id,
    type: Types.Trait,
    fields,
    traits: (args && args.traits) ? args.traits : [],
  };
}

module.exports = trait;
