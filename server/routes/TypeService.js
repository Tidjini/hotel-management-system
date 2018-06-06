const { TypeService } = require("./../models/TypeService");
const { ObjectID } = require("mongodb");

const _ = require("lodash");

module.exports = app => {
  app.post("/api/typeServices", (req, res) => {
    const typeService = new TypeService({
      Code: req.body.Code,
      Libelle: req.body.Libelle,
      Service: req.body.Service,
      _creator: "system"
    });
    typeService.save().then(
      doc => {
        res.send(doc);
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

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

  app.delete("/api/familles/:id", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Famille.findOneAndRemove({ _id: id }).then(
      famille => {
        if (famille == null) return res.status(404).send("famille not found");
        res.send({ famille });
      },
      err => {
        res.status(400).send();
      }
    );
  });

  app.patch("/api/familles/:id", (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const body = _.pick(req.body, ["LibFam", "ImpCuis", "TFam"]);

    Famille.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .then(famille => {
        if (famille == null) return res.status(404).send("Famille not found");
        res.send({ famille });
      })
      .catch(err => {
        res.status(400).send();
      });
  });
};
