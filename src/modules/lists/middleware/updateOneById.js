const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const listToUpdate = req.body;
  const { userId, listId } = req.params;

  updateOneById(userId, listId, listToUpdate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
