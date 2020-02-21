exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'a good playlist'},
        {id: 2, name: 'trash bags'},
        {id: 3, name: 'VS Code'}
      ]);
    });
};