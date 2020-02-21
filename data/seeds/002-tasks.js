exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'take out the trash', project_id: 1},
        {id: 2, description: 'scoop the litter', project_id: 1},
        {id: 3, description: 'come up with an idea', project_id: 2},
        {id: 4, description: 'start coding', project_id: 2}
      ]);
    });
};