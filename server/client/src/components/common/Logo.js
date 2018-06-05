import React from "react";
import { Icon } from "antd";

const CompleteLogo = () => {
  return (
    <div
      style={{
        height: "32px",
        margin: "8px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon
        type="database"
        style={{ color: "#FFF", fontSize: 16, marginRight: 5 }}
      />
      <h3 style={{ color: "#FFF", fontSize: 16, padding: 0, margin: 0 }}>
        Hotel Management
      </h3>
    </div>
  );
};

const MiniLogo = () => {
  return (
    <div
      style={{
        height: "32px",
        margin: "8px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon
        type="database"
        style={{ color: "#FFF", fontSize: 16, marginRight: 5 }}
      />
    </div>
  );
};

export { CompleteLogo, MiniLogo };
