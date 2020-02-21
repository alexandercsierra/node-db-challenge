module.exports = {
    getResources
}

const db = require('../data/db-config');

function getResources(){
    return db('resources');
}