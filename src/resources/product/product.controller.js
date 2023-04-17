const { ProductModel } = require("./product.model");

// Add product function
async function addProduct(req, res, next) {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(err);
  }
}

// Update product function
async function updateProduct (req, res, next) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = {new: true};
    const findProduct = await ProductModel.findByIdAndUpdate(id, updateData, options);
    console.log(findProduct)
    if (!findProduct) {
      res.status(404).json(id + "Not found");
      return;
    }
  
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(500).send(console.log("error"));
    return;
  }
}

// Get all products
async function allProduct(req, res) {
  try {
    const foundProduct = await ProductModel.find({});
    res.send(foundProduct);
  } catch (err) {
    res.status(500).send(console.log("error"));
    return;
  }
}

//Get specificProduct by id and check if product exist
async function specificProduct(req, res, next) {
  try {
    const id = req.params.id;
    const findProduct = await ProductModel.findById(id);
    if (!findProduct) {
      res.status(404).json(id + "Not found");
      return;
    }
    res.status(200).json(findProduct);
  } catch (error) {
    next(error);
    return;
  }
}

//Get product by category
async function categoryProduct(req, res) {
  try {
    const foundProduct = await ProductModel.find({ categories: req.params.id });
    res.send(foundProduct);
  } catch (error) {
    res.status(404).json("error");
    return;
  }
}


// Delete product 
async function deleteProduct (req, res, next) {
  try {
    const id = req.params.id;
    const findProduct = await ProductModel.findByIdAndDelete(id);
    if (!findProduct) {
      res.status(404).json(id + "Not found");
      return;
    }
  
    res.status(204).json(findProduct);
  } catch (error) {
    res.status(500).send(console.log("error"));
    return;
  }
}


module.exports = { addProduct, updateProduct, allProduct, specificProduct, categoryProduct, deleteProduct };
