const { Schema, model, models } = require("mongoose");

const orderItemSchema = new Schema({
  price: { type: Number, default: 0 },
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "product", required: true }, //ändrade från productid till product
});

const deliveryAddressSchema = new Schema({
  street: { type: String, required: true }, //adderad
  city: { type: String, required: true },
  zipcode: { type: String, required: true }, //ändrade från zip till zipcode
  country: { type: String, required: true }, // ändrade från adress till country
});

const orderSchema = new Schema({
  shipped: { type: String, default: false },
  customer: { type: Schema.Types.ObjectId, ref: "user" },
  orderItems: {
    type: [orderItemSchema],
    required: true,
  },
  deliveryAddress: {
    type: deliveryAddressSchema,
    required: true,
  },
});

const OrderModel = models.order || model("order", orderSchema);

module.exports = { OrderModel };
