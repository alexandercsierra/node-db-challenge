module.exports = {
    getProjects,
    add
}

const db = require('../data/db-config');

function getProjects(){
    return db('projects');
}

function add(project){
    return db('projects').insert(project);
}