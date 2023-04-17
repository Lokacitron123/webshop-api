const { addProduct, updateProduct, allProduct, specificProduct, categoryProduct, deleteProduct } = require("./product.controller");
const { validate, loggedInChecker, isAdminChecker } = require("../middleware/middlewares");
const { JoiProductObject, JoiProductUpdateObject  } = require("./product.validator")
const express = require("express");

const productRouter = express.Router();

productRouter.post("/", loggedInChecker, isAdminChecker, validate(JoiProductObject), addProduct);

productRouter.put("/:id", loggedInChecker, isAdminChecker, validate(JoiProductUpdateObject), updateProduct);

productRouter.get("/", allProduct);

productRouter.get("/:id", specificProduct);

productRouter.get("/byCategory/:id", categoryProduct);

productRouter.delete("/:id", loggedInChecker, isAdminChecker, deleteProduct)

module.exports = { productRouter };
