const express = require("express");
const { addCategory, allCategories, specificCategory } = require("./catergory.controller");
const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
categoryRouter.get("/", allCategories);
categoryRouter.get("/:id", specificCategory);


module.exports = { categoryRouter };
