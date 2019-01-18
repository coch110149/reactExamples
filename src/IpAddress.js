import React, { Component } from "react";
import "./IpAddress.css";

class IpAddress extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.ip}</h1>
        <p> (this might be your ip... maybe)</p>
      </div>
    );
  }
}

export default IpAddress;
