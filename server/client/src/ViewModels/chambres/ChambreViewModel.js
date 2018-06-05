import React from "react";
import { Divider, Icon, Tag } from "antd";

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
    key: "num"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: type => type
  },
  {
    title: "Vue",
    dataIndex: "vue",
    key: "vue"
  },
  {
    title: "Etat",
    dataIndex: "etat",
    key: "etat"
  },
  {
    title: "Nombre Lits",
    dataIndex: "nombreLit",
    key: "nombreLit"
  },
  {
    title: "Prix",
    dataIndex: "price",
    key: "price",
    render: price => `${price.formatMoney(2, ",", " ")} DA`
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;"> 一 Chambre N° {record.num}</a>
        <Divider type="vertical" />
        <Tag color="red">
          <a href="javascript:;" type="danger">
            Delete
          </a>
        </Tag>

        <Divider type="vertical" />
        <Tag color="green">
          <a href="javascript:;" type="danger">
            Edit
          </a>
        </Tag>
      </span>
    )
  }
];
