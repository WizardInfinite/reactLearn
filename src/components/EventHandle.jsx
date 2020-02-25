// 用户的事件处理
import React, { Component } from 'react'

export default class EventHandle extends Component {
    state = {
        name:''
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
       
    }
    handleClike=(value)=>{
        console.log(value)
        this.props.change('2222')
    }
    render() {
        return (
            <div>
                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
                 <button onClick={()=>this.handleClike('这是一个点击事件')}>点击</button>
                 {this.state.name}
            </div>
        )
    }
}


