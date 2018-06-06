import React, { Component } from "react";
import { connect } from "react-redux";
import { addTab } from "./../../actions";
import { CompleteLogo, MiniLogo } from "./Logo";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {
  state = {
    collapsed: false,
    current: "Home",
    logo: <CompleteLogo />
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({
      collapsed,
      logo: collapsed ? <MiniLogo /> : <CompleteLogo />
    });
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
    console.log(e.key);

    this.props.addTab(e.key);
    console.log(this.props.Current);
    //this.props.handleClick(e);
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        {this.state.logo}
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="Home">
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
          <Menu.Item key="Configuration">
            <span>
              <Icon type="setting" />
              <span>Configuration</span>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  const { Tabs, Current, Uris } = state.tabsObject;
  return {
    Tabs,
    Current,
    Uris
  };
};

export default connect(
  mapStateToProps,
  {
    addTab
  }
)(LeftMenu);
