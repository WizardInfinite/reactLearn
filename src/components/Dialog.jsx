import React, { Component } from "react";
import { createPortal } from "react-dom";
export default class Dialog extends Component {
 
  constructor(props) {
    super(props)
    this.node = document.createElement('div');
    this.node.classList.add('eee')
    document.body.appendChild(this.node)

  }
  render() {
      console.log(this.props)
  return createPortal((<div>{this.props.children}</div>), this.node);
  }
  componentWillMount(){
    document.body.removeChild(this.node) 
 }
}
