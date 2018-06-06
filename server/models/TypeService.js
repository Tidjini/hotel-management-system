const mongoose = require("mongoose");

const TypeServiceSchema = new mongoose.Schema({
  Code: {
    type: String,
    required: true,
    maxlength: 10
  },
  Libelle: {
    type: String,
    maxlength: 50
  },
  Service: {
    type: Number,
    required: true
  },
  _creator: {
    type: String,
    minlength: 3,
    trim: 1
  }
});

const TypeService = mongoose.model("typeServices", TypeServiceSchema);

module.exports = {
  TypeService
};
