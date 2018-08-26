
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.renameColumn('name', 'username');
      table.string('password');
      table.string('email');
      table.string('bio');
    }),
    knex.schema.createTable('resources', function (table) {
      table.increments('id');
      table.string('url');
      table.string('title');
      table.string('description');
      table.integer('user_id');
      table.integer('topic_id');
      table.timestamp('created_at', true).defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('ratings', function (table) {
      table.increments('id');
      table.float('stars', 2, 1);
      table.integer('user_id');
      table.integer('resource_id');
    }),
    knex.schema.createTable('likes', function (table) {
      table.increments('id');
      table.integer('user_id');
      table.integer('resource_id');
    }),
    knex.schema.createTable('comments', function (table) {
      table.increments('id');
      table.string('message');
      table.integer('user_id');
      table.integer('resource_id');
      table.timestamp('created_at', true).defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('topics', function (table) {
      table.increments('id');
      table.string('name');
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.renameColumn('username', 'name');
      table.dropColumn('password');
      table.dropColumn('email');
      table.dropColumn('bio');
    }),
    knex.schema.dropTable('resources'),
    knex.schema.dropTable('ratings'),
    knex.schema.dropTable('likes'),
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('topics')
  ])
};
