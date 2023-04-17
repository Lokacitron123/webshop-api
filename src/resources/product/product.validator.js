const Joi = require("joi");
const { validate } = require("../middleware/middlewares");

const JoiProductObject = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    inStock: Joi.number().required(),
    categories: Joi.array().min(1).required()
})

const JoiProductUpdateObject = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    inStock: Joi.number().required(),
    categories: Joi.array().min(1).required()
})



module.exports =  { JoiProductObject, JoiProductUpdateObject };