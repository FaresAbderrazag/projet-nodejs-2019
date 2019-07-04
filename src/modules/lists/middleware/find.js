const isUndefined = require('lodash/isUndefined');
const find = require('../services/find');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  const {
    first,
    offset,
    term,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (!isUndefined(first)) firstInt = parseInt(first, 10);
  if (!isUndefined(offset)) offsetInt = parseInt(offset, 10);

  find(userId, firstInt, offsetInt, term)
    .then((bdd) => {
      res.json(bdd);
    })
    .catch((err) => {
      next(err);
    });
};
