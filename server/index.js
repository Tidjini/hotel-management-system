//import libraries
const express = require("express");
const bodyParser = require("body-parser"); //for json purpose
const { mongoose } = require("../config/config.db");

const app = express();

//guests
app.get("/api/guest", (req, res) => {
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

app.listen(3000, () => {
  console.log("listening in port 3000");
});
