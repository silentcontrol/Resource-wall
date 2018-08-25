
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('topics').insert({id: 1, name: 'Music'}),
    knex('topics').insert({id: 2, name: 'Writing'}),
    knex('topics').insert({id: 3, name: 'Engineering'}),
    knex('topics').insert({id: 4, name: 'Health/Wellness'}),
    knex.raw('ALTER SEQUENCE topics_id_seq RESTART WITH 5')
  ]);
};
