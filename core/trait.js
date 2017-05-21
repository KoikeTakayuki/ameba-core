const Types = require('./types');

function trait(id, name, fields) {
  return {
    id,
    name,
    type: Types.Trait,
    fields,
  };
}

module.exports = trait;
