import React from "react";
import Socket from "../socket";
import SendForm from "./SendForm";
import Logs from "./Logs";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    let ws = new WebSocket("ws://localhost:8080/ws");
    let socket = (this.socket = new Socket(ws));

    socket.on("connect", this.onConnect);
    socket.on("disconnect", this.onDisconnect);
    socket.on("message", this.receiveMessage);
  }

  onConnect = () => {
    this.state.logs.push("onConnect.")
    this.setState({ logs: this.state.logs})
  };

  onDisconnect = () => {
    this.state.logs.push("onDisconnect.")
    this.setState({ logs: this.state.logs})
  };

  receiveMessage = (e) => {
    this.state.logs.push(e.data)
    this.setState({ logs: this.state.logs})
  }

  render() {
    return (
      <div>
        <h1>Go×React Chatサンプル</h1>
       <SendForm socket={this.socket} />
       <div id="log"></div>
       <Logs logs={this.state.logs} />
      </div>
    );
  }
}
