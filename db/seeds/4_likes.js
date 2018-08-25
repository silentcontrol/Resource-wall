
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('likes').insert({user_id: 1, resource_id: 1}),
    knex('likes').insert({user_id: 2, resource_id: 1}),
    knex('likes').insert({user_id: 2, resource_id: 2}),
    knex('likes').insert({user_id: 3, resource_id: 2}),
    knex('likes').insert({user_id: 1, resource_id: 3}),
    knex('likes').insert({user_id: 3, resource_id: 3}),
    knex('likes').insert({user_id: 2, resource_id: 4}),
    knex('likes').insert({user_id: 3, resource_id: 4})
  ]);
};
