
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('ratings').insert({stars: 2, user_id: 1, resource_id: 1}),
    knex('ratings').insert({stars: 5, user_id: 2, resource_id: 1}),
    knex('ratings').insert({stars: 5, user_id: 2, resource_id: 2}),
    knex('ratings').insert({stars: 5, user_id: 3, resource_id: 2}),
    knex('ratings').insert({stars: 4, user_id: 1, resource_id: 3}),
    knex('ratings').insert({stars: 5, user_id: 3, resource_id: 3}),
    knex('ratings').insert({stars: 1, user_id: 2, resource_id: 4}),
    knex('ratings').insert({stars: 2, user_id: 3, resource_id: 4})
  ]);
};
