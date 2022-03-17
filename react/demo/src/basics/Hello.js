import React, { Component } from "react";

export default class Hello extends Component {
//   constructor(props) {
//       super(props);
//       console.log(props)
//   }
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
