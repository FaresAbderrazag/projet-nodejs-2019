const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const userToCreate = req.body;

  createOne(userToCreate)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
