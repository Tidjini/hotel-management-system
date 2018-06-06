import React from "react";
import { typeService } from "./../../helpers/base";

export const fields = [
  {
    field: "Code",
    label: "Code",
    required: true,
    maxLength: 10,
    minLength: 1,
    type: String,
    inputType: "normal"
  },
  {
    field: "Libelle",
    label: "Code",
    maxLength: 50,
    minLength: 1,
    type: String,
    inputType: "normal"
  },
  {
    field: "Service",
    label: "Service",
    type: Number,
    data: typeService,
    inputType: "selector"
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
    title: "Libelle",
    dataIndex: "Libelle",
    key: "Libelle",
    editable: true
  },
  {
    title: "Service",
    dataIndex: "Service",
    key: "Service",
    editable: true,
    render: service => (
      <span
        style={{
          color: typeService[service],
          fontWeight: 600
        }}
      >
        {typeService[service]}
      </span>
    )
  }
];
