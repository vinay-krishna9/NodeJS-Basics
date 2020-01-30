const Joi = require("@hapi/joi");

const registrationValidation = data => {
  const schema = {
    FirstName: Joi.string()
      .required()
      .min(4)
      .max(255),
    LastName: Joi.string()
      .required()
      .min(4)
      .max(255),
    Email: Joi.string()
      .required()
      .min(4)
      .max(255)
      .email(),
    Password: Joi.string()
      .required()
      .min(4)
      .max(255)
  };
  return Joi.validate(data, schema);
};

const loginValidation = data => {
  const schema = {
    Email: Joi.string()
      .required()
      .min(4)
      .max(255)
      .email(),
    Password: Joi.string()
      .required()
      .min(4)
      .max(255)
  };
  return Joi.validate(data, schema);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
