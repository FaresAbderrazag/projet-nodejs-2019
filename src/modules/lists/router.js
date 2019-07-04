const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');

const router = new Router();

router.route('/users/:userId/lists')
  .get(find)
  .post(createOne);

router.route('/users/:userId/lists/:listId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);


module.exports = router;
