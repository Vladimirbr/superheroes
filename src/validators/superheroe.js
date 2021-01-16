const Joi = require("joi");

//Validation schema config
const schema = Joi.object({
  name: Joi.string().required(),
}).required();

module.exports.schema = schema;
