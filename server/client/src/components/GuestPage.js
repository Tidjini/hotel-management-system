import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuests } from "../actions";
import { Table, Column, Cell } from "@blueprintjs/table";
import { Button } from "@blueprintjs/core";
import AddGuestComponent from "./AddGuestComponent";

class GuestsPage extends Component {
  state = {
    columns: [],
    open: false
  };
  componentWillMount() {
    this.props.fetchGuests();
    this.renderGuests();
  }
  componentDidMount() {
    //    this.renderGuests();
  }
  handleDialogState = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div style={{ margin: "50px auto", display: "inline-block" }}>
        <Table numRows={this.props.guests.length}>{this.state.columns}</Table>
        <div style={{ marginTop: 20 }}>
          <Button
            icon="add"
            className="pt-button pt-intent-primary"
            small
            style={{ marginRight: 10 }}
            onClick={this.handleDialogState.bind(this)}
          >
            Ajouter
          </Button>
          <AddGuestComponent
            open={this.state.open}
            handleDialogState={this.handleDialogState.bind(this)}
          />
          <Button
            icon="edit"
            className="pt-button pt-intent-success"
            small
            style={{ marginRight: 10 }}
          >
            Editer
          </Button>
          <Button
            icon="delete"
            className="pt-button pt-intent-danger"
            small
            style={{ marginRight: 10 }}
          >
            Supprimer
          </Button>
          <Button
            icon="refresh"
            className="pt-button pt-intent-warning"
            small
            style={{ marginRight: 10 }}
          >
            Refresh
          </Button>
        </div>
      </div>
    );
  }

  renderGuests() {
    const columnsRender = [
      // <Column
      //   key="1"
      //   name="Référence"
      //   cellRenderer={row => <Cell>{this.props.guests[row]._id}</Cell>}
      // />,
      <Column
        key="2"
        name="Nom"
        cellRenderer={row => <Cell>{this.props.guests[row].lastname}</Cell>}
      />,
      <Column
        key="3"
        name="Prénom"
        cellRenderer={row => <Cell>{this.props.guests[row].firstname}</Cell>}
      />,

      <Column
        key="4"
        name="Age"
        cellRenderer={row => <Cell>{this.props.guests[row].age}</Cell>}
      />,
      <Column
        key="4"
        name="Card ID"
        cellRenderer={row => <Cell>{this.props.guests[row].cartId}</Cell>}
      />,
      <Column
        key="4"
        name="Téléphone"
        cellRenderer={row => <Cell>{this.props.guests[row].phoneNumber}</Cell>}
      />
    ];

    this.setState({
      columns: columnsRender
    });
  }
}

const mapStateToProps = state => {
  const { guests } = state;
  return { guests };
};

export default connect(mapStateToProps, { fetchGuests })(GuestsPage);
