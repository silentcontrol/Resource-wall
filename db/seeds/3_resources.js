
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('resources').insert({
      id: 1,
      url: 'https://loremflickr.com/320/240/dog',
      title: 'Statistics about or related to coordination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 3,
      topic_id: 6,
      average_rating: 3.5
    }),
    knex('resources').insert({
      id: 2,
      url: 'https://loremflickr.com/320/240/dog',
      title: 'Research about or related to coordination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 1,
      topic_id: 6,
      average_rating: 5
    }),
    knex('resources').insert({
      id: 3,
      url: 'https://loremflickr.com/320/240/dog',
      title: 'Personal experience with or involving coordination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 2,
      topic_id: 2,
      average_rating: 4.5
    }),
    knex('resources').insert({
      id: 4,
      url: 'https://loremflickr.com/320/240/dog',
      title: 'Growth or decline of popularity of DVD players',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user_id: 1,
      topic_id: 3,
      average_rating: 3
    }),
    knex.raw('ALTER SEQUENCE resources_id_seq RESTART WITH 5')
  ]);
};
