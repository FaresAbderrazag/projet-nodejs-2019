const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (userId, listId, listToUpdate) => {
  return updateModel.validate()
    .then(() => connect())
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.updateOne({
      _id: ObjectId(listId),
      userId,
    }, { $set: listToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(userId, listId);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
