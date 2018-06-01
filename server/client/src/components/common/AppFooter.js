import React, { Component } from "react";

import { Layout } from "antd";
const { Footer } = Layout;

export default class AppFooter extends Component {
  render() {
    return (
      <Footer
        style={{ textAlign: "center", height: 50, padding: 0, margin: 0 }}
      >
        Hotel Management System ©2018 Created by Brand
      </Footer>
    );
  }
}
