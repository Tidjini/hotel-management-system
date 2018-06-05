import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChambres } from "./../../actions";
import { Table } from "antd";
import { columns } from "./../../ViewModels/chambres/ChambreViewModel";

class ChambreCollection extends React.Component {
  componentWillMount() {
    this.props.fetchChambres();
    console.log(this.props.chambres);
  }
  render() {
    return (
      <Table
        bordered
        size="middle"
        dataSource={this.props.chambres}
        columns={columns}
      />
    );
  }
}

const mapStateToProps = state => {
  const { chambres } = state.chambresData;
  return {
    chambres
  };
};

export default connect(
  mapStateToProps,
  { fetchChambres }
)(ChambreCollection);
