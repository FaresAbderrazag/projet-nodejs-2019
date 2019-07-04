const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { userId, listId } = req.params;
  findOneById(userId, listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
