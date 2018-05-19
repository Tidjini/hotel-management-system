import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuestPage from "./components/GuestPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GuestPage />
      </div>
    );
  }
}

//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath "C:\Users\Messaoudi Tidjini\mongo-data"
export default App;
