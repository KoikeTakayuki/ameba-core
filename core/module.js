const Types = require('./types');
const rootModule = require('./root-module');

function module(id, parentModule) {
  return {
    id,
    type: Types.Module,
    parentModule: parentModule || rootModule,
  };
}

module.exports = module;
