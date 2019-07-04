const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;

  deleteOneById(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
