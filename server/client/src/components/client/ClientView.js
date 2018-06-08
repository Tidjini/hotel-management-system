import React, { Component } from "react";
import ViewForm from "../common/ViewForm";
import { connect } from "react-redux";
import { fetchClients, addClient } from "./../../actions";
import { panes } from "./../../ViewModels/clients/ClientViewModel";

export default class ClientView extends Component {
  render() {
    return <ViewForm panes={panes} addFormData={this.addClient.bind(this)} />;
  }
}
