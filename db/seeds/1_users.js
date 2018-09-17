
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      username: 'Homer',
      password: '123',
      email: 'homer@simpsons.com',
      bio: 'I am Homer'
    }),
    knex('users').insert({
      id: 2,
      username: 'Quagmire',
      password: '123',
      email: 'glen@familyguy.com',
      bio: 'giggity giggity giggity'
    }),
    knex('users').insert({
      id: 3,
      username: 'Darthvader',
      password: 'asdf',
      email: 'darthvader@starwars.com',
      bio: 'may the force be with you'
    }),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4')
  ]);
};
