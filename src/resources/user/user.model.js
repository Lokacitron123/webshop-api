const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username required"],
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid username",
    },
  },
  password: {
    type: String,
    required: [true, "A password is required"],
    minLength: 6,
  },
  isAdmin: { type: Boolean, default: false },
});

const UserModel = models.user || model("user", userSchema);

module.exports = { UserModel };
