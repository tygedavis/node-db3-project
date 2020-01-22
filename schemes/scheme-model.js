const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return(db('schemes'));
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  
}

function add(scheme) {
  return db('schemes').insert(scheme)
    .then(created => {
      return findById(created[0])
    })
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}