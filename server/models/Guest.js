const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    trim: 1
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    trim: 1
  },
  age: {
    type: Number,
    required: true
  },
  cartId: {
    type: String,
    minlength: 3,
    trim: 1
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 3,
    trim: 1
  },
  autre: {
    type: String,
    minlength: 3,
    trim: 1
  },
  remarque: {
    type: String,
    minlength: 3,
    trim: 1
  }
});
