//import libraries
const express = require("express");
const bodyParser = require("body-parser"); //for json purpose
const { mongoose } = require("../config/config.db");
const { Guest } = require("./models/Guest");
require("../config/config");

const app = express();

const _ = require("lodash");
app.use(bodyParser.json());

//guests
app.post("/api/guests", (req, res) => {
  //    _creator: req.user._id added in header with json webtoken
  const guest = new Guest({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    cartId: req.body.cartId,
    phoneNumber: req.body.phoneNumber,
    autre: req.body.autre,
    remarque: req.body.remarque,
    _creator: "system"
  });

  guest.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});
app.get("/api/guests", (req, res) => {
  // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
  Guest.find().then(
    guests => {
      res.send({ guests });
    },
    err => {
      res.status(400).send(err);
    }
  );
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Started on Port", PORT);
});

module.exports = {
  app
};
