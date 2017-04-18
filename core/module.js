const Types = require('./types');
const rootModule = require('./root-module');

function Module(id, parentModule) {
  return {
    id,
    type: Types.Module,
    parentModule: parentModule || rootModule,
  };
}

module.exports = Module;
