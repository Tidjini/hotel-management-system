import React, { Component } from "react";
import ViewForm from "../common/ViewForm";
import { connect } from "react-redux";
import { fetchClients, addClient, getClientById } from "./../../actions";
import { panes } from "./../../ViewModels/clients/ClientViewModel";

class ClientView extends Component {
  state = {
    id: undefined
  };
  componentWillMount() {
    const tab = this.props.current;
    const infoTab = tab.split("-");
    if (infoTab[1] != "New") {
      this.props.getClient(infoTab[1]);
      this.setState({ id: infoTab[1] });
      //this.setState({ client:  });
    }
  }
  addClient = client => {
    this.props.addClient(client);
    this.props.fetchClients();
  };
  render() {
    if (this.state.id == undefined) {
      console.log("id : undefined");
      return <ViewForm panes={panes} addFormData={this.addClient.bind(this)} />;
    } else {
      if (this.props.recentClient != undefined) {
        console.log("recentClient : defined", this.props.recentClient);

        return (
          <ViewForm
            panes={panes}
            addFormData={this.addClient.bind(this)}
            data={this.props.recentClient}
          />
        );
      } else {
        return <h1>loading</h1>;
      }
    }
  }
}

const mapStateToProps = state => {
  const { recentClient } = state.clientData;
  const { current } = state.tabsObject;
  return {
    recentClient,
    current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClient: id => dispatch(getClientById(id)),
    addClient: client => dispatch(addClient(client)),
    fetchClients: () => dispatch(fetchClients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientView);
