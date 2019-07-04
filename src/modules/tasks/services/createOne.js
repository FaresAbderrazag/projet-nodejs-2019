const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const listFindOneById = require('../../lists/services/findOneById');

module.exports = (taskToCreate, listId) => {
  const task = {
    ...taskToCreate,
    listId,
    checked: false,
  };

  return createModel.validate(task)
    .then(() => listFindOneById(listId))
    .then(() => connect())
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.insertOne(task))
    .then(dbResponse => dbResponse.ops[0]);
};
