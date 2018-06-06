import React from "react";
import {
  familleImpCuis,
  familleImpCuisColors,
  familleTFam
} from "./../../helpers/base";

export const fields = [
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
    data: familleImpCuis,
    inputType: "selector"
  },
  {
    field: "TFam",
    label: "Type de famille",
    type: Number,
    data: familleTFam,
    inputType: "selector"
  }
];

export const columns = [
  {
    title: "Libellé",
    dataIndex: "LibFam",
    key: "LibFam",
    editable: true
  },
  {
    title: "Impr. Cuisine",
    dataIndex: "ImpCuis",
    key: "ImpCuis",
    editable: true,
    render: impCuis => (
      <span
        style={{
          color: familleImpCuisColors[impCuis],
          fontWeight: 600
        }}
      >
        {familleImpCuis[impCuis]}
      </span>
    )
  },
  {
    title: "Type",
    dataIndex: "TFam",
    key: "TFam",
    editable: true,
    render: tFam => (
      <span
        style={{
          color: familleImpCuisColors[tFam],
          fontWeight: 600
        }}
      >
        {familleTFam[tFam]}
      </span>
    )
  }
];
