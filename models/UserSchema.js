const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  username: {
    required: true,
    type: String,
    trim: true,
    minlength: [3, "username must be 3 chars "],
    maxlength: [50, "username can be maximum 50 chars"],
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (v) => v.includes("@") && v.includes(".com"),
      message: "Email is not valid",
    },
  },
  password: {
    required: true,
    type: String,
    trim: true,
    minlength: [6, "password must be 6 chars"],
    maxlength: [50, "password can be maximum 50 chars"],
  },
  phone: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (v) => v.length === 11 && v.startsWith("01"),
      message: "Phone number must be 11 digits and start with 01",
    },
  },
});

module.exports = model("userprofile", userSchema);
