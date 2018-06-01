import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends Component {
  state = {
    collapsed: false,
    current: "home"
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
    this.props.handleClick(e);
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div
          className="logo"
          style={{
            height: "32px",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px"
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="home">
            <Icon type="home" />
            <span>Accuiel</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="laptop" />
                <span>Chambre</span>
              </span>
            }
          >
            <Menu.Item key="ChambreCollection">List des chambre</Menu.Item>
            <Menu.Item key="ChambreView">Ajouter une chambre</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
