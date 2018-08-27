
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      username: 'fakeDonaldTrump',
      password: 'asdf',
      email: 'potus@whitehouse.gov',
      bio: 'climate change is a hoax'
    }),
    knex('users').insert({
      id: 2,
      username: 'Quagmire',
      password: 'asdf',
      email: 'glen@familyguy.com',
      bio: 'giggity giggity giggity'
    }),
    knex('users').insert({
      id: 3,
      username: 'Darthvader',
      password: 'asdf',
      email: 'anakin@starwars.com',
      bio: 'may the force be with you'
    }),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4')
  ]);
};
