import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuests, deleteGuest } from "../actions";
import { Table, Column, Cell, TableLoadingOption } from "@blueprintjs/table";
import { Button } from "@blueprintjs/core";
import AddGuestComponent from "./AddGuestComponent";
import ConfirmationDialog from "./common/confirmationDialog";

class GuestsPage extends Component {
  state = {
    columns: [],
    selectedGuest: null,
    open: false,
    editOpen: false,
    deleteDialogState: false,
    cellsLoading: true
  };
  componentWillMount() {
    this.props.fetchGuests();
    setTimeout(() => {
      this.setState({ cellsLoading: false });
    }, 800);
    this.renderGuests();
  }

  componentDidMount() {
    //    this.renderGuests();
  }

  onRefresh = () => {
    this.props.fetchGuests();
    this.setState({ cellsLoading: true });

    setTimeout(() => {
      this.setState({ cellsLoading: false });
    }, 1500);
  };
  handleDialogState = () =>
    this.setState({
      open: !this.state.open
    });
  handleEditDialogState = () => {
    this.setState({
      editOpen: !this.state.editOpen,
      selectedGuest: this.state.selectedGuest
    });
  };
  handleDeleteDialogState = () =>
    this.setState({
      deleteDialogState: !this.state.deleteDialogState
    });

  getLoadingOptions() {
    const loadingOptions = [];
    if (this.state.cellsLoading) {
      loadingOptions.push(TableLoadingOption.CELLS);
    }
    if (this.state.columnHeadersLoading) {
      loadingOptions.push(TableLoadingOption.COLUMN_HEADERS);
    }
    if (this.state.rowHeadersLoading) {
      loadingOptions.push(TableLoadingOption.ROW_HEADERS);
    }
    return loadingOptions;
  }

  onDeleteGuest = () => {
    if (this.state.selectedGuest != null) {
      this.setState({ deleteDialogState: true });
    }
  };
  deleteClient = () => {
    this.props.deleteGuest(this.state.selectedGuest._id);
    this.setState({ deleteDialogState: false });
    this.onRefresh();
  };

  onTableSelection(e) {
    console.log("TableTestRedux:onSelection e:", e);
    if (e.length > 0 && e[0].rows) {
      var selectedRow = e[0].rows[0];
      this.setState({ selectedGuest: this.props.guests[selectedRow] });
      console.log(this.state.selectedGuest);
      //this.props.onSelectedEdgeOverrideIdx(selectedRow);
    }
  }

  render() {
    return (
      <div style={{ margin: "10px auto", display: "inline-block" }}>
        <Table
          numRows={this.props.guests.length}
          loadingOptions={this.getLoadingOptions()}
          onSelection={e => this.onTableSelection(e)}
        >
          {this.state.columns}
        </Table>
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
            onClick={this.handleEditDialogState.bind(this)}
          >
            Editer
          </Button>
          <AddGuestComponent
            open={this.state.editOpen}
            handleDialogState={this.handleEditDialogState.bind(this)}
            guest={this.state.selectedGuest}
          />
          <Button
            icon="delete"
            className="pt-button pt-intent-danger"
            small
            style={{ marginRight: 10 }}
            onClick={this.onDeleteGuest.bind(this)}
          >
            Supprimer
          </Button>
          <ConfirmationDialog
            icon="delete"
            isOpen={this.state.deleteDialogState}
            title="Suppression"
            body="Voulez vous vraiment supprimer le client ."
            closeAction={this.handleDeleteDialogState.bind(this)}
            deleteAction={this.deleteClient.bind(this)}
          />
          <Button
            icon="refresh"
            className="pt-button pt-intent-warning"
            small
            style={{ marginRight: 10 }}
            onClick={this.onRefresh.bind(this)}
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

export default connect(mapStateToProps, { fetchGuests, deleteGuest })(
  GuestsPage
);
