const Joi = require("@hapi/joi");

const registerValidation = data => {
  const schema = {
    name: Joi.string()
      .required()
      .min(5),
    email: Joi.string()
      .required()
      .min(5),
    password: Joi.string()
      .required()
      .min(5)
  };
  return Joi.validate(data, schema);
};

const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .required()
      .min(5),
    password: Joi.string()
      .required()
      .min(5)
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
