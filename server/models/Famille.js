const mongoose = require("mongoose");

const FamilleSchema = new mongoose.Schema({
  LibFam: {
    type: String,
    required: true,
    maxlength: 50
  },
  ImpCuis: {
    type: Number
  },
  TFam: {
    type: Number
  },
  _creator: {
    type: String,
    minlength: 3,
    trim: 1
  }
});

const Famille = mongoose.model("famille", FamilleSchema);

module.exports = {
  Famille
};
