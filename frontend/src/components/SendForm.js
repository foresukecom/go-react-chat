import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SendForm extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this)

    this.state = {
      message: "",
    };
  }

  changeMessage(e) {
    this.setState({ message: e.target.value })
  }

  sendMessage = () => {
    console.log(" SendForm/send message: " + this.state.message);
    this.props.socket.emit(this.state.message);
    this.setState({message: ""})
  }

  render() {

    return (
      <div>
        <input value={this.state.message} onChange={e => this.changeMessage(e)} size="64" />
        <button onClick={this.sendMessage} disabled={!this.state.message}>Send</button>
      </div>
    );
  }
}
