const trait = require('../trait');
const dateTimeField = require('../field/dateTimeField');
const booleanField = require('../field/booleanField');

const SystemRecord = trait('SystemRecord', 'SystemRecord', [
  booleanField('isDeleted', 'isDeleted', { default: false }),
  dateTimeField('creationDateTime', 'creationDateTime', { defaultCurrentTimeOnCreate: true }),
  dateTimeField('updateDateTime', 'updateDateTime', { defaultCurrentTimeOnUpdate: true }),
]);

module.exports = SystemRecord;