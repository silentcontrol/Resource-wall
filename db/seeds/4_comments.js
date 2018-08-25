
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('comments').insert({
      id: 1,
      message: "Wow, what a great resource!",
      user_id: 1,
      resource_id: 1,
    }),
    knex('comments').insert({
      id: 2,
      message: "Wow, what a great resource!",
      user_id: 2,
      resource_id: 1,
    }),
    knex('comments').insert({
      id: 3,
      message: "Wow, what a great resource!",
      user_id: 2,
      resource_id: 2,
    }),
    knex('comments').insert({
      id: 4,
      message: "Wow, what a great resource!",
      user_id: 3,
      resource_id: 2,
    }),
    knex('comments').insert({
      id: 5,
      message: "Wow, what a great resource!",
      user_id: 1,
      resource_id: 3,
    }),
    knex('comments').insert({
      id: 6,
      message: "Wow, what a great resource!",
      user_id: 3,
      resource_id: 3,
    }),
    knex('comments').insert({
      id: 7,
      message: "Wow, what a great resource!",
      user_id: 2,
      resource_id: 4,
    }),
    knex('comments').insert({
      id: 8,
      message: "Wow, what a great resource!",
      user_id: 3,
      resource_id: 4,
    }),
    knex.raw('ALTER SEQUENCE comments_id_seq RESTART WITH 9')
  ]);
};

