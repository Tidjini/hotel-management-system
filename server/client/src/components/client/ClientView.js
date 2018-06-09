import React, { Component } from "react";
import ViewForm from "../common/ViewForm";
import { connect } from "react-redux";
import { fetchClients, addClient } from "./../../actions";
import { panes } from "./../../ViewModels/clients/ClientViewModel";

class ClientView extends Component {
  addClient = client => {
    this.props.addClient(client);
    this.props.fetchClients();
  };
  render() {
    return <ViewForm panes={panes} addFormData={this.addClient.bind(this)} />;
  }
}

const mapStateToProps = state => {
  const { clients } = state.clientData;
  return {
    clients
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, addClient }
)(ClientView);
