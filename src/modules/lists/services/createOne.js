const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const userFindOneById = require('../../users/services/findOneById.js');

module.exports = (listToCreate, userId) => {
  const list = {
    ...listToCreate,
    userId,
  };
  return createModel.validate(list)
    .then(() => userFindOneById(userId))
    .then(() => connect())
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.insertOne(list))
    .then(dbResponse => dbResponse.ops[0]);
};
