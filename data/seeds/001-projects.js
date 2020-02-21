

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'clean the house', description: 'make the house less dirty'},
        {id: 2, name: 'build an app'}
      ]);
    });
};