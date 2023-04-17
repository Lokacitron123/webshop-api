const express = require("express");

const { categoryRouter } = require("./resources/category/category.router");
const { productRouter } = require("./resources/product/product.router");
const { userRouter } = require("./resources/user/user.router");
const { orderRouter } = require("./resources/order/order.router");
const { CategoryModel } = require("./resources/category/category.model");
const { ProductModel } = require("./resources/product/product.model");
const { UserModel } = require("./resources/user/user.model")


const app = express();
const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");
// Här är ett bra ställe att lägga till routers och andra middlewares.

app.use(
  cookieSession({
    name: "session",
    secret: "secret",
    maxAge: 1000 * 10,
    httpOnly: false,
  })
);

app.use(express.json());

app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


module.exports = { app };
