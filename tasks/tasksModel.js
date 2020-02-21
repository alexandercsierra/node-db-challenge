module.exports = {
    getTasks,
    add
}

const db = require('../data/db-config');

function getTasks(){
    return db('tasks');
}

function add(task){
    return db('tasks').insert(task);
}