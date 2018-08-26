
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries in an order that won't give foreign key errors
  return knex('ratings').del()
  .then(()=>{return knex('likes').del()})
  .then(()=>{return knex('comments').del()})
  .then(()=>{return knex('resources').del()})
  .then(()=>{return knex('topics').del()})
  .then(()=>{return knex('users').del()})
};
