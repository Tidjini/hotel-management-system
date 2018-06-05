const { Famille } = require("./../models/Famille");
const { ObjectID } = require("mongodb");

const _ = require("lodash");

module.exports = app => {
  //post the chambre request
  app.post("/api/familles", (req, res) => {
    const famille = new Famille({
      LibFam: req.body.LibFam,
      ImpCuis: req.body.ImpCuis,
      TFam: req.body.TFam,
      _creator: "system"
    });
    famille.save().then(
      doc => {
        res.send(doc);
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

  //get Chamber List
  app.get("/api/familles", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    Famille.find().then(
      famille => {
        res.send({ famille });
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

  //delete chambre by id
  app.delete("/api/chambres/:id", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Chambre.findOneAndRemove({ _id: id }).then(
      chambre => {
        if (chambre == null) return res.status(404).send("chambre not found");
        res.send({ chambre });
      },
      err => {
        res.status(400).send();
      }
    );
  });

  app.patch("/api/chambres/:id", (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const body = _.pick(req.body, [
      "num",
      "type",
      "vue",
      "etat",
      "nombreLit",
      "price"
    ]);

    Chambre.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .then(chambre => {
        if (chambre == null) return res.status(404).send("Chambre not found");
        res.send({ chambre });
      })
      .catch(err => {
        res.status(400).send();
      });
  });
};
