const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (userToCreate) => {
  return createModel.validate(userToCreate)
    .then(connect)
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.insertOne(userToCreate))
    .then(dbResponse => dbResponse.ops[0]);
};
