import React, { Component } from "react";

import { Layout } from "antd";
const { Header } = Layout;

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={{ background: "#B6C2CE", padding: 0, height: 50 }}>
        <div />
      </Header>
    );
  }
}
