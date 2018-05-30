const { Chambre } = require("./../models/Chambre");

module.exports = app => {
  //post the chambre request
  app.post("/api/chambres", (req, res) => {
    const chambre = new Chambre({
      num: req.body.num,
      type: req.body.type,
      vue: req.body.vue,
      etat: req.body.etat,
      nombreLit: req.body.nombreLit,
      price: req.body.price,
      _creator: "system"
    });

    chambre.save().then(
      doc => {
        res.send(doc);
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

  //get Chamber List
  app.get("/api/chambres", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    Chambre.find().then(
      chambres => {
        res.send({ chambres });
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
      guest => {
        if (guest == null) return res.status(404).send("Guest not found");
        res.send({ guest });
      },
      err => {
        res.status(400).send();
      }
    );
  });
};