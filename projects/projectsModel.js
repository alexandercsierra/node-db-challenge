module.exports = {
    getProjects,
    add,
    update,
    remove
}

const db = require('../data/db-config');

function getProjects(){
    return db('projects');
}

function add(project){
    return db('projects').insert(project);
}

function update(project, id){
    return db('projects').where({id}).update(project)
}

function remove(id){
    return db('projects').where({id}).del();
}