const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  const listToCreate = req.body;

  createOne(listToCreate, userId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
