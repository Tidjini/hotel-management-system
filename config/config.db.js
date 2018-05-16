const mongoose = require("mongoose");
require("./config");

//to kbe global
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
