const mongoose = require("mongoose");

const ChambreSchema = new mongoose.Schema({
  num: {
    type: String,
    required: true,
    maxlength: 10
  },
  type: {
    type: String,
    maxlength: 10
  },
  vue: {
    type: String,
    maxlength: 50
  },
  etat: {
    type: Number
  },
  nombreLit: {
    type: Number
  },
  price: {
    type: Number
  },
  _creator: {
    type: String,
    minlength: 3,
    trim: 1
  }
});

const Chambre = mongoose.model("chambre", ChambreSchema);

module.exports = {
  Chambre
};
