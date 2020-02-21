module.exports = {
    getTasks
}

const db = require('../data/db-config');

function getTasks(){
    return db('tasks');
}