const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
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
  return db('schemes')
    .join('steps', function() {
      this
        .on('steps.scheme_id', '=', 'schemes.id')
    })
    .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .orderBy('steps.step_number')
    .where('steps.scheme_id', id);
}

function add(scheme) {
  return db('schemes').insert(scheme)
    .then(created => {
      return findById(created[0])
    })
}

function addStep(step, scheme_id) {
  return db('steps').insert(step).where( scheme_id );
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}