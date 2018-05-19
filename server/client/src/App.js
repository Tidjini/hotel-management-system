import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuestPage from "./components/GuestPage";
import HeaderComponent from "./components/HeaderComponent";
import LeftMenuComponent from "./components/LeftMenuComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div>
          <LeftMenuComponent />
          <GuestPage />
        </div>
      </div>
    );
  }
}

//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath "C:\Users\Messaoudi Tidjini\mongo-data"
export default App;
