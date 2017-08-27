const create = ('./create');
const read = ('./read');
const update = ('./update');
const deleteRecord = ('./delete');

const getReposiroty = connection => ({
  create: create(connection),
  read: read(connection),
  update: update(connection),
  delete: deleteRecord(connection),
});

module.exports = getReposiroty;
