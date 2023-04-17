const Joi = require("joi");

const joiUserObject = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});


module.exports =  { joiUserObject };

