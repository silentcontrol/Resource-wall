
exports.up = (knex, Promise) => {
  return knex.schema.table('resources', function (table) {
    table.float('average_rating', 2, 1).defaultTo(0);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.table('resources', function (table) {
    table.dropColumn('average_rating');
  })
};
