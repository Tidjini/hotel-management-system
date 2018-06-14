import React, { Component } from "react";
import ViewForm from "../common/ViewForm";
import { connect } from "react-redux";
import { fetchClients, addClient } from "./../../actions";
import { panes } from "./../../ViewModels/clients/ClientViewModel";

class ClientView extends Component {
  state = {
    client: {
      _id: "",
      Code: "",
      Nom: "",
      Prenom: "",
      Categorie: 1,
      Nationalite: "",
      Sexe: 1,
      Adresse: "",
      NumTel: "",
      NumFax: "",
      Mobile: "",
      Email: "",
      RC: "",
      NIS: "",
      IF: "",
      ART: "",
      ExoTva: 1,
      ListNoir: 0,
      President: 0,
      ExoTimbre: 0,
      ExoTaxChambre: 0,
      NumPassport: "",
      DatePassport: "",
      VillePassport: "",
      CiNum: "",
      Deliv: "",
      CiVille: "",
      NumActMariage: ""
    }
  };
  componentWillMount() {
    console.log(this.props.current);
    const id = "";
  }
  addClient = client => {
    this.props.addClient(client);
    this.props.fetchClients();
  };
  render() {
    return (
      <ViewForm
        panes={panes}
        addFormData={this.addClient.bind(this)}
        data={this.state.client}
      />
    );
  }
}

const mapStateToProps = state => {
  const { clients } = state.clientData;
  const { current } = state.tabsObject;
  return {
    clients,
    current
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, addClient }
)(ClientView);
