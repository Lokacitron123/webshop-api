const { OrderModel } = require("./order.model");
const { UserModel } = require("../user/user.model");
const { custom } = require("joi");
const { ProductModel } = require("../product/product.model");

//Lägga till en beställning.
async function addOrder(req, res, next) {
  try {
    for (const orderItem of req.body.orderItems) {
      const product = await ProductModel.findById(orderItem.product);
      if (product) {
        product.inStock -= orderItem.quantity;
        orderItem.price = orderItem.quantity * product.price;
        await product.save();
      }
    }

    const order = await OrderModel.create({
      ...req.body,
      customer: req.session._id,
    });
    res.status(201).json(order);

    return res.status(401).json("Please login to create an order.");
  } catch (error) {
    next(error);
  }
}
//Hämta alla orders.
async function getOrders(req, res, next) {
  const orders = await OrderModel.find({}).populate("customer");

  if (!orders) {
    res.status(404).json();
    return;
  }

  res.status(200).json(orders);
}
//hämta en specifik order
async function getSpecificOrder(req, res) {
  try {
    const id = req.params.id;
    const loggedInUser = req.session._id;
    const loggedInUserAdmin = req.session.isAdmin;
    const specificOrder = await OrderModel.findById(id).populate("customer");
    const orders = await OrderModel.findById(id);
    if (!orders) {
      return res.status(404).json(id + " not found");
    }

    if (loggedInUserAdmin) {
      return res.status(200).json(specificOrder);
    } else if (specificOrder.customer._id == loggedInUser) {
      return res.status(200).json(specificOrder);
    } else {
      return res.status(403).json(id + " , could not be found");
    }
  } catch (error) {
    res.status(403).json(error.message);
  }
}

// markera det order som skickat.
async function markAsShipped(req, res) {
  const order = await OrderModel.findById(req.params.id);
  order.shipped = true;
  await order.save();
  res.status(200).json(order);
}
//eporterar funktionerna.
module.exports = { addOrder, getOrders, getSpecificOrder, markAsShipped };
