const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  firstName: joi.string(),
  lastName: joi.string(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  pwd: joi.string().required(),
});

const updateModel = joi.object().keys({
  firstName: joi.string(),
  lastName: joi.string(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  pwd: joi.string().required(),
});

module.exports = {
  createModel,
  updateModel,
};
