import React, { Component } from "react";
import { Tabs } from "antd";
import Fammilles from "./Familles";
const TabPane = Tabs.TabPane;

export default class Configurations extends Component {
  render() {
    return (
      <Tabs
        defaultActiveKey="services"
        tabPosition="left"
        style={{ minHeight: 520 }}
      >
        <TabPane tab="Services" key="services">
          <div style={{ display: "flex" }}>
            <div>
              <h3>Familles de produits</h3>
              <Fammilles />
            </div>
            <div>
              <h3>Type de Service</h3>
              <Fammilles />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h3>Type de restaurations</h3>
              <Fammilles />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Groupe et privileges" key="privileges">
          Groupe / Groupe de privileges/ privileges
        </TabPane>
      </Tabs>
    );
  }
}
