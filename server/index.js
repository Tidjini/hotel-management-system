//import libraries
const express = require("express");
const bodyParser = require("body-parser"); //for json purpose
const { mongoose } = require("../config/config.db");
require("../config/config");

const app = express();

app.use(bodyParser.json());

require("./routes/ChambreRouteHandler")(app);
require("./routes/FamilleRouteHandler")(app);
require("./routes/TypeServiceRouteHandler")(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Started on Port", PORT);
});

module.exports = {
  app
};
