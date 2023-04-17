const { addOrder, getOrders, getSpecificOrder, markAsShipped } = require("./order.controller");
const { loggedInChecker, isAdminChecker } = require("../middleware/middlewares");


const express = require("express");

const orderRouter = express.Router();

orderRouter.post("/", loggedInChecker, addOrder);
orderRouter.get("/", loggedInChecker, getOrders );
orderRouter.get("/:id", loggedInChecker, getSpecificOrder );
orderRouter.put("/:id", markAsShipped);

module.exports = { orderRouter };
