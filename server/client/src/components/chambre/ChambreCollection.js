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

export default connect(mapStateToProps, { fetchChambres })(ChambreCollection);

Number.prototype.formatMoney = function(c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};
