import React, { Component } from "react";

import { Layout } from "antd";
const { Header } = Layout;

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={{ background: "#CCC", padding: 0, height: 50 }}>
        <div />
      </Header>
    );
  }
}
