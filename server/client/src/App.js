import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";

import MainTab from "./components/Tabs/MainTab";
import LeftMenu from "./components/common/LeftMenu";
import AppHeader from "./components/common/Header";
import AppFooter from "./components/common/AppFooter";

import { Layout, Breadcrumb, Icon } from "antd";
const { Content, Footer } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    Tabs: ["Home"],
    current: "Home"
  };
  handleLeftMenuClick = e => {
    const tabs = this.state.Tabs;
    tabs.push(e.key);

    this.setState({
      Tabs: tabs,
      current: e.key
    });
    this.addTab(e.key);
  };

  addTab = tab => {
    return tab;
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu handleClick={this.handleLeftMenuClick} />

        <Layout>
          <AppHeader />
          <Content style={{ margin: "16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 520 }}>
              <MainTab />
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  }
}

//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath "C:\Users\Messaoudi Tidjini\mongo-data"
export default App;
