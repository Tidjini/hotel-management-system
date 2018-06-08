import React, { Component } from "react";
import ViewForm from "../common/ViewForm";
import { panes } from "./../../ViewModels/clients/ClientViewModel";

export default class ClientView extends Component {
  render() {
    return <ViewForm panes={panes} />;
  }
}
