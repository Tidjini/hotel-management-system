const mongoose = require("mongoose");
require("./config");

//to be global
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
