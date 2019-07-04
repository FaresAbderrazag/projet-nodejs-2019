const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (userId, listId) => {
  return connect()
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.findOne({ _id: ObjectId(listId), userId }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`List not found for id: ${listId}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
