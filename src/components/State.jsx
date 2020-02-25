import React, { Component } from 'react'
import axios from 'axios'
export default class State extends Component {
      state={}
    componentDidMount(){
        const baseUrl = 'https://www.fastmock.site/mock/32ee2f0c5c4c465dccf1abe8b8b2a0eb/test'
        axios.get(baseUrl+'/commentsList').then(res=>{
            console.log(res.data.data.commentData.commentTotalCount)
            this.setState({
                Count:res.data.data.commentData.commentTotalCount
            })
        })
    }
    render() {
        return (
            <div>
               {this.state.Count}
            </div>
        )
    }
}
