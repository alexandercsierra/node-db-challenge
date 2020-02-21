module.exports = {
    getResources,
    add
}

const db = require('../data/db-config');

function getResources(){
    return db('resources');
}

function add(resource){
    return db('resources').insert(resource);
}
