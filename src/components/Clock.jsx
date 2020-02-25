// import React from 'react';

import React, { Component } from 'react'

class ClockS extends Component {
    constructor(props){
        super(props)
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        this.TimeId = setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        }, 1000);
    }
    // 当组件要卸载的时候
    componentWillUnmount(){
        clearInterval(this.TimeId)
    }
    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}


const Clock = () => {
    return (
        <div>
           <ClockS></ClockS> 
        </div>
    );
}

export default Clock;
