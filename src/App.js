import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import socketIOClient from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const socket = socketIOClient("/api/hello");
  }
  render() {
    return <div className="App">dsad</div>;
  }
}

export default App;
