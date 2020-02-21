module.exports = {
    getTasks,
    add,
    update,
    remove
}

const db = require('../data/db-config');

function getTasks(){
    return db('tasks');
}

function add(task){
    return db('tasks').insert(task);
}

function update(task, id){
    return db('tasks').where({id}).update(task)
}

function remove(id){
    return db('tasks').where({id}).del();
}