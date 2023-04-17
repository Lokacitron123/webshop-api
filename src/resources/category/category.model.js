const { Schema, model, models } = require("mongoose");

const categorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const CategoryModel = models.category || model("category", categorySchema);

module.exports = { CategoryModel };
