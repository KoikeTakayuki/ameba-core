const Types = require('./types');

function trait(id, fields) {
  return {
    id,
    type: Types.Trait,
    fields,
  };
}

module.exports = trait;
