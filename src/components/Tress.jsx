import React, { Component } from "react";
class TreeNode extends Component {
 get isFolder() {
    return this.props.model.children && this.props.model.children.length;
  }
  toggle = () => {
    if (this.isFolder) {
      this.setState({
        open: !this.state.open
      });
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <ul>
        <li>
          <div onClick={this.toggle}>
            {this.props.model.title}
            {/* 加减号 */}
            {this.isFolder ? <span>{this.state.open ? "-" : "+"}</span> : null}
          </div>
          {/* 可能存在子数 */}
          {this.isFolder
            ? (<div  style={{ display: this.state.open ? "block" : "none" }}>{this.props.model.children.map(models => (
                <TreeNode
                  model={models}
                  key={models.title}
                ></TreeNode>
              ))}</div>)
            : null}
        </li>
      </ul>
    );
  }
}
export class Tress extends Component {
  treeData = {
    title: "Web全栈架构师",
    children:[
        {title:'web全栈1'},
        {title:'web全栈2'},
        {title:'web全栈3',children:[{ title: "ES6" }, { title: "动效" }]}
    ]
  };
  render() {
    return(
        <div>
             <TreeNode model={this.treeData}></TreeNode>
        </div>
    )
  }
}

export default Tress;
