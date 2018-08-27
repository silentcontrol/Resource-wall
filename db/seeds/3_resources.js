
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('resources').insert({
      id: 1,
      url: 'https://www.starwars.com/databank/darth-vader',
      title: 'About me',
      description: 'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force.',
      user_id: 3,
      topic_id: 6,
      average_rating: 3.5
    }),
    knex('resources').insert({
      id: 2,
      url: 'https://www.maralagoclub.com/',
      title: 'Mar-a-Lago fee',
      description: 'My private resort membership fee doubled to $200,000 since I became president, hahahaha',
      user_id: 1,
      topic_id: 6,
      average_rating: 5
    }),
    knex('resources').insert({
      id: 3,
      url: 'https://vignette.wikia.nocookie.net/familyguy/images/8/8b/FGuy_Brian_Gen2012_R3Flat.jpg/revision/latest?cb=20120905115633',
      title: 'I hate Brian',
      description: 'Brian is a failure as a father and never sees his son',
      user_id: 2,
      topic_id: 2,
      average_rating: 4.5
    }),
    knex('resources').insert({
      id: 4,
      url: 'https://i.ytimg.com/vi/80wqyrjIXQc/hqdefault.jpg',
      title: 'Fake news',
      description: 'I found a fake news website',
      user_id: 1,
      topic_id: 3,
      average_rating: 3
    }),
    knex.raw('ALTER SEQUENCE resources_id_seq RESTART WITH 5')
  ]);
};
