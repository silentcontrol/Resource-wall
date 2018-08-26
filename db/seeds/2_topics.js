
exports.seed = function(knex, Promise) {
  return Promise.all([
<<<<<<< HEAD
    knex('topics').insert({id: 1, name: 'Music'}),
    knex('topics').insert({id: 2, name: 'Writing'}),
    knex('topics').insert({id: 3, name: 'Engineering'}),
    knex('topics').insert({id: 4, name: 'Health/Wellness'}),
    knex.raw('ALTER SEQUENCE topics_id_seq RESTART WITH 5')
=======
    knex('topics').insert({id: 1, name: 'Coding'}),
    knex('topics').insert({id: 2, name: 'Design'}),
    knex('topics').insert({id: 3, name: 'Arts'}),
    knex('topics').insert({id: 4, name: 'Food'}),
    knex('topics').insert({id: 5, name: 'Engineering'}),
    knex('topics').insert({id: 6, name: 'Writing'}),
    knex('topics').insert({id: 7, name: 'Photography'}),
    knex('topics').insert({id: 8, name: 'Sports'}),
    knex('topics').insert({id: 9, name: 'Health'}),
    knex.raw('ALTER SEQUENCE topics_id_seq RESTART WITH 10')
>>>>>>> 8ce0a55731fe99ba139b5545c1d9fe9ecba2c899
  ]);
};
