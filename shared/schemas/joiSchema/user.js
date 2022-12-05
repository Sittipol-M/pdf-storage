/** @format */

const Joi = require("joi");
const userValidateSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = userValidateSchema;
