import React from "react";
import { clientState, clientStateColor } from "./../../helpers/base";

export const panes = [
  {
    name: "General",
    fields: [
      {
        field: "LibFam",
        label: "Libelé",
        required: true,
        maxLength: 10,
        minLength: 1,
        type: String,
        inputType: "normal"
      },
      {
        field: "ImpCuis",
        label: "Imprime Cuisine",
        type: Number,
        inputType: "number"
      }
    ]
  },
  {
    name: "Autre",
    fields: [
      {
        field: "TFam",
        label: "Type de famille",
        type: Number,
        inputType: "number"
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
