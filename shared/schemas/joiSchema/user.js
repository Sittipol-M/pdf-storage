/** @format */

const Joi = require("joi");

const registerValidateSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.ref("password"),
});

const loginValidationSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { registerValidateSchema, loginValidationSchema };
