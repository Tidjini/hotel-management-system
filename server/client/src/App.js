import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";

import MainTab from "./components/Tabs/MainTab";
import LeftMenu from "./components/common/LeftMenu";

import { Layout, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu />

        <Layout>
          <Header style={{ background: "#CCC", padding: 0 }} />
          <Content style={{ margin: "16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 24, background: "#fff", minHeight: 520 }}>
              <MainTab />
            </div>
          </Content>
          <Footer
            style={{ textAlign: "center", height: 50, padding: 0, margin: 0 }}
          >
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath "C:\Users\Messaoudi Tidjini\mongo-data"
export default App;
