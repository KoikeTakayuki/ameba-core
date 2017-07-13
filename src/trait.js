const Trait = require('./core/Trait');

const trait = (id, name, fields) => ({ type: Trait, id, name, fields });

module.exports = trait;
