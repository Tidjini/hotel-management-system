import React from "react";
import { chambreState, chambreStateColors } from "./../../helpers/base";

export const fields = [
  {
    field: "num",
    label: "Numéro",
    required: true,
    maxLength: 10,
    minLength: 1,
    type: String
  },
  {
    field: "type",
    label: "Type",
    maxLength: 10,
    type: String
  },
  {
    field: "vue",
    label: "Vue",
    maxLength: 50,
    type: String
  },
  {
    field: "etat",
    label: "Etat",
    type: Number
  },
  {
    field: "nombreLit",
    label: "Nombre de lits",
    type: Number
  },
  {
    field: "price",
    label: "Prix",
    type: Number
  }
];

export const columns = [
  {
    title: "Code",
    dataIndex: "Code",
    key: "Code",
    editable: true
  },
  {
    title: "Nom",
    dataIndex: "Nom",
    key: "Nom",
    editable: true
  },
  {
    title: "Prenom",
    dataIndex: "Prenom",
    key: "Prenom",
    editable: true
  },
  {
    title: "Categorie",
    dataIndex: "Categorie",
    key: "Categorie",
    editable: true
  },
  {
    title: "Nationalite",
    dataIndex: "Nationalite",
    key: "Nationalite",
    editable: true
  },
  {
    title: "NumTel",
    dataIndex: "NumTel",
    key: "NumTel",
    editable: true
  }
];
