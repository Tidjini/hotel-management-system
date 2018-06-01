import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTab, changeTab } from "./../../actions";

import Home from "./../home/Home";
import ChambreView from "./../chambre/ChambreView";
import ChambreCollection from "./../chambre/ChambreCollection";

import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

const components = {
  Home: <Home />,
  ChambreCollection: <ChambreCollection />,
  ChambreView: <ChambreView />
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

  componentWillMount() {
    const tabs = this.props.Tabs;

    const panes = [];
  }

  componentDidMount() {}

  onChange = activeKey => {
    this.props.changeTab(activeKey);
    //this.setState({ activeKey });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };
  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
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
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              {components[pane.key]}
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

export default connect(mapStateToProps, {
  removeTab,
  changeTab
})(MainTab);
