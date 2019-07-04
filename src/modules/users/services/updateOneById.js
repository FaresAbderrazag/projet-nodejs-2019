const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, userToUpdate) => {
  return updateModel.validate()
    .then(() => connect())
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: userToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(id);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
