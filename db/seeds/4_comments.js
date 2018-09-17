
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('comments').insert({
      id: 1,
      message: "I am the Homer",
      user_id: 1,
      resource_id: 1,
    }),
    knex('comments').insert({
      id: 2,
      message: "giggity giggity goo",
      user_id: 2,
      resource_id: 1,
    }),
    knex('comments').insert({
      id: 3,
      message: "I like Lois",
      user_id: 2,
      resource_id: 2,
    }),
    knex('comments').insert({
      id: 4,
      message: "May the force be with you",
      user_id: 3,
      resource_id: 2,
    }),
    knex('comments').insert({
      id: 5,
      message: "Hello World",
      user_id: 1,
      resource_id: 3,
    }),
    knex('comments').insert({
      id: 6,
      message: "Give yourself to the Dark Side.",
      user_id: 3,
      resource_id: 3,
    }),
    knex('comments').insert({
      id: 7,
      message: "Giggidy, giggidy, gig-gi-dy!",
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

