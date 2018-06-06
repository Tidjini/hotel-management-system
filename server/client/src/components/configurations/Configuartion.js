import React, { Component } from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

export default class Configurations extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="services"
        tabPosition="left"
        style={{ height: 220 }}
      >
        <TabPane tab="Services" key="services">
          Services / famille de produit/ type de service / type de restauration
        </TabPane>
        <TabPane tab="Groupe et privileges" key="privileges">
          Groupe / Groupe de privileges/ privileges
        </TabPane>
      </Tabs>
    );
  }
}
