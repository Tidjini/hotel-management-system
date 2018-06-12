import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTab, changeTab } from "./../../actions";

import Home from "./../home/Home";
import ChambreView from "./../chambre/ChambreView";
import ChambreCollection from "./../chambre/ChambreCollection";
import Configurations from "./../configurations/Configuartion";
import ClientCollection from "./../client/ClientCollection";
import ClientView from "./../client/ClientView";

import { tabsTitle } from "./../../helpers/tabs";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

const components = {
  Home: <Home />,
  ChambreCollection: <ChambreCollection />,
  ChambreView: <ChambreView />,
  Configuration: <Configurations />,
  ClientCollection: <ClientCollection />,
  ClientView: <ClientView />
};
class MainTab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;

    this.state = {
      activeKey: this.props.Current || "home",
      panes: []
    };
  }

  onChange = activeKey => {
    console.log(activeKey + " onchange maintab");

    this.props.changeTab(activeKey);
    //this.setState({ activeKey });
  };
  onEdit = (targetKey, action) => {
    if (action === "add") return;
    this[action](targetKey);
  };

  remove = targetKey => {
    this.props.removeTab(targetKey);
  };

  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.props.current}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.props.panes.map(pane => {
          return (
            <TabPane
              tab={tabsTitle[pane.title]}
              key={pane.key}
              closable={pane.closable}
            >
              {components[pane.component]}
            </TabPane>
          );
        })}
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  const { panes, current } = state.tabsObject;
  return {
    panes,
    current
  };
};

export default connect(
  mapStateToProps,
  {
    removeTab,
    changeTab
  }
)(MainTab);
