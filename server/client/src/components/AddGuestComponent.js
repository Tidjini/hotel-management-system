import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGuests, addGuest } from "../actions";
import {
  AnchorButton,
  Button,
  Classes,
  Dialog,
  Intent,
  Tooltip,
  FormGroup
} from "@blueprintjs/core";

class AddGuestsComponent extends Component {
  state = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    usePortal: true,

    guestName: "",
    guestFirst: "",
    guestAge: 0,
    guestPhone: ""
  };

  saveGuest = () => {
    const guest = {
      firstname: this.state.guestFirst,
      lastname: this.state.guestName,
      age: this.state.guestAge,
      phoneNumber: this.state.guestPhone
    };

    this.props.addGuest(guest);
    this.props.fetchGuests();
  };

  render() {
    return (
      <Dialog
        icon="add"
        onClose={this.props.handleDialogState}
        title="Ajouter un nouveau client"
        autoFocus={this.state.autoFocus}
        canEscapeKeyClose={this.state.canEscapeKeyClose}
        canOutsideClickClose={this.state.canOutsideClickClose}
        enforceFocus={this.state.enforceFocus}
        isOpen={this.props.open}
        usePortal={this.state.usePortal}
      >
        <div className={Classes.DIALOG_BODY}>
          <div style={{ float: "left", marginRight: 10 }}>
            <FormGroup label="Nom" labelFor="text-input" requiredLabel={true}>
              <input
                id="text-input"
                placeholder="Mohamedi"
                value={this.state.guestName}
                onChange={event => {
                  this.setState({ guestName: event.target.value });
                }}
              />
            </FormGroup>
            <FormGroup
              label="Prénom"
              labelFor="text-input"
              requiredLabel={true}
            >
              <input
                id="text-input"
                placeholder="Mohamed"
                value={this.state.guestFirst}
                onChange={event => {
                  this.setState({ guestFirst: event.target.value });
                }}
              />
            </FormGroup>
          </div>
          <div style={{ float: "left", marginRight: 10 }}>
            <FormGroup label="Age" labelFor="text-input" requiredLabel={true}>
              <input
                id="text-input"
                placeholder="18"
                value={this.state.guestAge}
                onChange={event => {
                  this.setState({ guestAge: event.target.value });
                }}
              />
            </FormGroup>
            <FormGroup label="Phone" labelFor="text-input" requiredLabel={true}>
              <input
                id="text-input"
                placeholder="0514 27 46 27"
                value={this.state.guestPhone}
                onChange={event => {
                  this.setState({ guestPhone: event.target.value });
                }}
              />
            </FormGroup>
          </div>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="This button is hooked up to close the dialog.">
              <Button onClick={this.props.handleDialogState}>Close</Button>
            </Tooltip>
            <AnchorButton
              intent={Intent.SUCCESS}
              target="_blank"
              onClick={this.saveGuest.bind(this)}
            >
              Save
            </AnchorButton>
          </div>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  const { newGuest } = state;
  return { newGuest };
};

export default connect(mapStateToProps, { fetchGuests, addGuest })(
  AddGuestsComponent
);
