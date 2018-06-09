const mongoose = require("mongoose");

const TvaSchema = new mongoose.Schema({
  CodeTva: {
    type: Number,
    required: true
  },
  Libelle: {
    type: String,
    maxlength: 50
  },

  _creator: {
    type: String,
    minlength: 3,
    trim: 1
  }
});

const Tva = mongoose.model("tva", TvaSchema);

module.exports = {
  Tva
};
