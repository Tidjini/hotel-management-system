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
    title: "État",
    dataIndex: "etat",
    key: "etat",
    editable: true,
    render: etat => (
      <span
        style={{
          padding: "3px 18px",
          backgroundColor: chambreStateColors[etat],
          borderRadius: 3
        }}
      >
        {chambreState[etat]}
      </span>
    )
  },
  {
    title: "Numéro",
    dataIndex: "num",
    key: "num",
    editable: true,
    render: num => (
      <p
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "#2E2F2E",
          padding: 0,
          margin: 0
        }}
      >
        {num}
      </p>
    )
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: type => type,
    editable: true
  },
  {
    title: "Vue",
    dataIndex: "vue",
    key: "vue",
    editable: true
  },

  {
    title: "Nombre Lits",
    dataIndex: "nombreLit",
    key: "nombreLit",
    editable: true
  },
  {
    title: "Prix",
    dataIndex: "price",
    key: "price",
    render: price =>
      price != null ? `${price.formatMoney(2, ",", " ")} DA` : "0,00 DA",
    editable: true
  }
];
