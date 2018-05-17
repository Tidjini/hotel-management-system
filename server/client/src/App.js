import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Classes, Intent, Spinner, Button } from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";
import "./App.css";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/"
});

class App extends Component {
  cellRenderer = rowIndex => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
  };

  componentWillMount() {
    const res = axiosInstance.get("/guests").then(data => {
      console.log(
        data.map(([firstname, lastname, age, cartId, phoneNumber, autre]) => ({
          firstname,
          lastname,
          age,
          cartId,
          phoneNumber,
          autre
        }))
      );
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Spinner className={Classes.SMALL} intent={Intent.PRIMARY} />
        <Button icon="edit" rightIcon="caret-down" text="Edit" />
        <Table
          numRows={10}
          enableColumnReordering={true}
          enableColumnResizing={false}
          enableRowReordering={true}
          enableRowResizing={false}
        >
          <Column name="Dollars" cellRenderer={this.cellRenderer} />
          <Column name="Euro" cellRenderer={this.cellRenderer} />
        </Table>
      </div>
    );
  }
}

export default App;
