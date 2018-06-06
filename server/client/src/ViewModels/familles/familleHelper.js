import React from "react";
import {
  familleImpCuis,
  familleImpCuisColors,
  familleTFam
} from "./../../helpers/base";

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
          padding: "3px 18px",
          backgroundColor: familleImpCuisColors[impCuis],
          borderRadius: 3
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
          padding: "3px 18px",
          backgroundColor: familleImpCuisColors[tFam],
          borderRadius: 3
        }}
      >
        {familleTFam[tFam]}
      </span>
    )
  }
];
