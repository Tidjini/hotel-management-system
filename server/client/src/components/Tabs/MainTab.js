import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTab } from "./../../actions";

import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

class MainTab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;

    this.state = {
      activeKey: "",
      panes: []
    };
    const pa = this.props.Tabs.map(tab => {
      // const im =  import(`./../home/${tab}`);
      import(`./../home/${tab}`).then(m => {
        const activeKey = tab;
        const panes = this.state.panes;
        const Compo = m.default;
        const pane = {
          title: tab,
          content: <Compo />,
          key: tab,
          closable: false
        };
        panes.push(pane);
        this.setState({ panes, activeKey });
      });
    });

    console.log(pa);
  }

  onChange = activeKey => {
    this.setState({ activeKey });
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
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  const { Tabs, Current } = state.tabsObject;
  return {
    Tabs,
    Current
  };
};

export default connect(mapStateToProps, {
  removeTab
})(MainTab);
