const { CategoryModel } = require("./category.model");

//Lägg till en ny kategori.
async function addCategory(req, res, next) {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
}

// hämta alla kategorier.
async function allCategories(req, res) {
  try {
    const foundCategories = await CategoryModel.find({});
    res.send(foundCategories);
  } catch (err) {
    res.status(500).send(console.log("error"));
    return;
  }
}

//hämta en specifik kategori.
async function specificCategory(req, res, next) {
  try {
    const id = req.params.id;
    const category = await CategoryModel.findById(id);
    res.status(200).json(category);
  } catch (error) {
    next(error);
    return;
  }
}
//exporteta funktionerna.
module.exports = { addCategory, allCategories, specificCategory };
