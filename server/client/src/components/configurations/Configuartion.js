import React, { Component } from "react";
import { Tabs, Divider } from "antd";
import Familles from "./Familles";
import TypeService from "./TypeService";
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
              <Familles />
            </div>
            <Divider type="vertical" />
            <div>
              <h3>Type de Service</h3>
              <TypeService />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h3>Type de restaurations</h3>
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
