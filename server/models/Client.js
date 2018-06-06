const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  Code: {
    type: String,
    required: true,
    maxlength: 10
  },
  Nom: {
    type: String,
    maxlength: 50
  },
  Prenom: {
    type: String,
    maxlength: 50
  },
  Categorie: {
    type: Number
  },
  Nationalite: {
    type: String,
    maxlength: 50
  },
  Sexe: {
    type: Number
  },
  Adresse: {
    type: String,
    maxlength: 200
  },
  NumTel: {
    type: String,
    maxlength: 30
  },
  NumFax: {
    type: String,
    maxlength: 30
  },
  Mobile: {
    type: String,
    maxlength: 30
  },
  Email: {
    type: String,
    maxlength: 50
  },
  RC: {
    type: String,
    maxlength: 30
  },
  NIS: {
    type: String,
    maxlength: 30
  },
  IF: {
    type: String,
    maxlength: 30
  },
  ART: {
    type: String,
    maxlength: 30
  },
  ExoTva: {
    type: Number
  },
  ListNoir: {
    type: Number
  },
  President: {
    type: Number
  },
  ExoTimbre: {
    type: Number
  },
  ExoTaxChambre: {
    type: Number
  },
  NumPassport: {
    type: String,
    maxlength: 30
  },
  DatePassport: {
    type: Date
  },
  VillePassport: {
    type: String,
    maxlength: 50
  },
  CiNum: {
    type: String,
    maxlength: 30
  },
  Deliv: {
    type: Date
  },
  CiVille: {
    type: String,
    maxlength: 50
  },
  NumActMariage: {
    type: String,
    maxlength: 20
  },
  _creator: {
    type: String,
    minlength: 3,
    trim: 1
  }
});

const Client = mongoose.model("client", ClientSchema);

module.exports = {
  Client
};
