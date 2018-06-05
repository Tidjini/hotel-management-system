import React from "react";
import { Divider, Icon, Tag } from "antd";
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
    title: "Numéro",
    dataIndex: "num",
    key: "num",
    editable: true
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
    title: "Etat",
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
    title: "Nombre Lits",
    dataIndex: "nombreLit",
    key: "nombreLit",
    editable: true
  },
  {
    title: "Prix",
    dataIndex: "price",
    key: "price",
    render: price => `${price.formatMoney(2, ",", " ")} DA`,
    editable: true
  }
];
