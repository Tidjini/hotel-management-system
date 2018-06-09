import React, { Component } from "react";

import { Layout } from "antd";
const { Header } = Layout;

export default class AppHeader extends Component {
  render() {
    return (
      <Header
        style={{
          background: "#FFF",
          padding: 0,
          height: 50,
          borderBottom: "2px #B6C2CE solid"
        }}
      >
        <div />
      </Header>
    );
  }
}
