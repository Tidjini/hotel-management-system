const { Client } = require("./../models/Client");
const { ObjectID } = require("mongodb");

const _ = require("lodash");

module.exports = app => {
  //post the Client request
  app.post("/api/clients", (req, res) => {
    const client = new Client({
      Code: req.body.Code,
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Categorie: req.body.Categorie,
      Nationalite: req.body.Nationalite,
      Sexe: req.body.Sexe,
      Adresse: req.body.Adresse,
      NumTel: req.body.NumTel,
      NumFax: req.body.NumFax,
      Mobile: req.body.Mobile,
      Email: req.body.Email,
      RC: req.body.RC,
      NIS: req.body.NIS,
      IF: req.body.IF,
      ART: req.body.ART,
      ExoTva: req.body.ExoTva,
      ListNoir: req.body.ListNoir,
      President: req.body.President,
      ExoTimbre: req.body.ExoTimbre,
      ExoTaxChambre: req.body.ExoTaxChambre,
      NumPassport: req.body.NumPassport,
      DatePassport: req.body.DatePassport,
      VillePassport: req.body.VillePassport,
      CiNum: req.body.CiNum,
      Deliv: req.body.Deliv,
      CiVille: req.body.CiVille,
      NumActMariage: req.body.NumActMariage,
      _creator: "system"
    });
    client.save().then(
      doc => {
        res.send(doc);
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

  //get Chamber List
  app.get("/api/clients", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    Client.find().then(
      clients => {
        res.send({ clients });
      },
      err => {
        res.status(400).send(err);
      }
    );
  });

  //delete Client by id
  app.delete("/api/clients/:id", (req, res) => {
    // apply the fetch of { _application_key: req.app.key, _user_role: req.user.role }
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Client.findOneAndRemove({ _id: id }).then(
      client => {
        if (client == null) return res.status(404).send("Client not found");
        res.send({ client });
      },
      err => {
        res.status(400).send();
      }
    );
  });

  app.patch("/api/clients/:id", (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    const body = _.pick(req.body, [
      "Code",
      "Nom",
      "Prenom",
      "Categorie",
      "Nationalite",
      "Sexe",
      "Adresse",
      "NumTel",
      "NumFax",
      "Mobile",
      "Email",
      "RC",
      "NIS",
      "IF",
      "ART",
      "ExoTva",
      "ListNoir",
      "President",
      "ExoTimbre",
      "ExoTaxChambre",
      "NumPassport",
      "DatePassport",
      "VillePassport",
      "CiNum",
      "Deliv",
      "CiVille"
    ]);

    Client.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .then(client => {
        if (client == null) return res.status(404).send("Client not found");
        res.send({ client });
      })
      .catch(err => {
        res.status(400).send();
      });
  });
};
