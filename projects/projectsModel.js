module.exports = {
    getProjects
}

const db = require('../data/db-config');

function getProjects(){
    return db('projects');
}