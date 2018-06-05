import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChambres } from "./../../actions";
import { Table } from "antd";

const columns = [
  {
    title: "Numéro",
    dataIndex: "num",
    key: "num"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: type => type
  },
  {
    title: "Vue",
    dataIndex: "vue",
    key: "vue"
  },
  {
    title: "Etat",
    dataIndex: "etat",
    key: "etat"
  },
  {
    title: "Nombre Lits",
    dataIndex: "nombreLit",
    key: "nombreLit"
  },
  {
    title: "Prix",
    dataIndex: "price",
    key: "price",
    render: price => `${price.formatMoney(2, ",", " ")} DA`
  }
];

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
