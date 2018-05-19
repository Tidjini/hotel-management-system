import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuestPage from "./components/GuestPage";
import HeaderComponent from "./components/HeaderComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <GuestPage />
      </div>
    );
  }
}

//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath "C:\Users\Messaoudi Tidjini\mongo-data"
export default App;
