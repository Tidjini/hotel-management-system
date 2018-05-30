//import libraries
const express = require("express");
const bodyParser = require("body-parser"); //for json purpose
const { mongoose } = require("../config/config.db");
const { ObjectID } = require("mongodb");
const { Guest } = require("./models/Guest");
require("../config/config");

const app = express();

const _ = require("lodash");
app.use(bodyParser.json());

require("./routes/ChambreRouteHandler")(app);

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
app.delete("/api/guests/:id", (req, res) => {
  // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Guest.findOneAndRemove({ _id: id }).then(
    guest => {
      if (guest == null) return res.status(404).send("Guest not found");
      res.send({ guest });
    },
    err => {
      res.status(400).send();
    }
  );
});

app.patch("/api/guests/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  const body = _.pick(req.body, [
    "firstname",
    "lastname",
    "age",
    "phoneNumber"
  ]);

  Guest.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
    .then(guest => {
      if (guest == null) return res.status(404).send("Guest not found");
      res.send({ guest });
    })
    .catch(err => {
      res.status(400).send();
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Started on Port", PORT);
});

module.exports = {
  app
};
