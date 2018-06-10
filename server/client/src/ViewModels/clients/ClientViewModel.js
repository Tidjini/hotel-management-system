import React from "react";
import {
  clientState,
  clientStateColor,
  nationaliteList
} from "./../../helpers/base";

export const panes = [
  {
    name: "General",
    colspan: 16,
    columns: [
      {
        fields: [
          {
            field: "Code",
            label: "Code",
            required: true,
            maxLength: 10,
            minLength: 1,
            type: String,
            inputType: "normal",
            col: 1
          },
          {
            field: "Nom",
            label: "Nom",
            maxLength: 50,
            inputType: "normal",
            col: 1
          },
          {
            field: "Prenom",
            label: "Prénom",
            maxLength: 50,
            inputType: "normal",
            col: 1
          },
          {
            field: "Sexe",
            label: "Sexe",
            type: Number,
            data: ["Homme", "Femme"],
            inputType: "selector",
            col: 1
          },
          {
            field: "Categorie",
            label: "Catégorie",
            type: Number,
            data: ["Société", "Personel"],
            inputType: "selector",
            col: 1
          },
          {
            field: "Nationalite",
            label: "Nationalité",
            type: String,
            data: nationaliteList,
            inputType: "selector",
            col: 1
          }
        ]
      },
      {
        fields: [
          {
            field: "Adresse",
            label: "Adresse",
            maxLength: 200,
            inputLength: 200,
            inputType: "normal",
            col: 2
          },
          {
            field: "NumTel",
            label: "Numéro Tél",
            maxLength: 30,
            inputType: "normal",
            col: 2
          },
          {
            field: "NumFax",
            label: "Numéro Fax",
            maxLength: 30,
            inputType: "normal",
            col: 2
          },
          {
            field: "Mobile",
            label: "Mobile",
            maxLength: 30,
            inputType: "normal",
            col: 2
          },
          {
            field: "Email",
            label: "Email",
            maxLength: 30,
            inputType: "normal",
            col: 2
          }
        ]
      }
    ]
  },
  {
    name: "Fiscalité",
    colspan: 8,
    columns: [
      {
        fields: [
          {
            field: "RC",
            label: "R.C.",
            maxLength: 30,
            inputType: "normal"
          },
          {
            field: "NIS",
            label: "N.I.S.",
            maxLength: 30,
            inputType: "normal"
          },
          {
            field: "IF",
            label: "I.F.",
            maxLength: 30,
            inputType: "normal"
          },
          {
            field: "ART",
            label: "ART",
            maxLength: 30,
            inputType: "normal"
          },
          {
            field: "ExoTva",
            label: "Exo Tva",
            inputType: "number",
            type: Number
          },
          {
            field: "ExoTimbre",
            label: "Exo Timbre",
            inputType: "number",
            type: Number
          },
          {
            field: "ExoTaxChambre",
            label: "Exo Tax Chambre",
            inputType: "number",
            type: Number
          }
        ]
      }
    ]
  },
  {
    name: "Avancée",
    colspan: 10,
    columns: [
      {
        fields: [
          {
            field: "ListNoir",
            label: "List Noir",
            type: Number,
            data: ["Non", "Oui"],
            inputType: "selector"
          },
          {
            field: "President",
            label: "Président",
            type: Number,
            data: ["Non", "Oui"],
            inputType: "selector"
          }
        ]
      }
    ]
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
  },
  {
    title: "ListNoir",
    dataIndex: "ListNoir",
    key: "ListNoir",
    editable: true,
    render: listNoir => (
      <span
        style={{
          color: clientStateColor[listNoir],
          fontWeight: 600
        }}
      >
        {clientState[listNoir]}
      </span>
    )
  }
];
