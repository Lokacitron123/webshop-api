const { OrderModel } = require("../order/order.model");

function validate(schema) {
  return function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (!error) return next();
    res.status(400).json(error.message);
  };
}

// Se ifall användaren är inloggad.
function loggedInChecker(req, res, next) {
  if (req.session._id) {
    next();
  } else {
    res.status(401).json("Please login");
  }
}

// lägg denna efter loggedInChecker för att kolla att användaren först är inloggad innan den kollar om använder är en admin
function isAdminChecker(req, res, next) {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(403).json("Please login");
  }
}

module.exports = { validate, loggedInChecker, isAdminChecker };
