
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('resources', function (table) {
      table.foreign('user_id').references('users.id');
      table.foreign('topic_id').references('topics.id');
    }),
    knex.schema.table('ratings', function (table) {
      table.foreign('user_id').references('users.id');
      table.foreign('resource_id').references('resources.id');
    }),
    knex.schema.table('likes', function (table) {
      table.foreign('user_id').references('users.id');
      table.foreign('resource_id').references('resources.id');
    }),
    knex.schema.table('comments', function (table) {
      table.foreign('user_id').references('users.id');
      table.foreign('resource_id').references('resources.id');
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('resources', function (table) {
      table.dropForeign('user_id');
      table.dropForeign('topic_id');
    }),
    knex.schema.table('ratings', function (table) {
      table.dropForeign('user_id');
      table.dropForeign('resource_id');
    }),
    knex.schema.table('likes', function (table) {
      table.dropForeign('user_id');
      table.dropForeign('resource_id');
    }),
    knex.schema.table('comments', function (table) {
      table.dropForeign('user_id');
      table.dropForeign('resource_id');
    })
  ])
};
