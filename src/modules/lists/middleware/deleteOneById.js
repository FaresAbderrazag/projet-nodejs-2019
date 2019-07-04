const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { userId, listId } = req.params;

  deleteOneById(userId, listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
