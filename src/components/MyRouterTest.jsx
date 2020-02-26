import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
// Router:管理历史记录变更，location变更等，并且传递给后代
// 创建一个上下文保存history,location等
const RouterContext = React.createContext()
class BrowserRouter extends Component{
    constructor(props){
        super(props)
        // 创建浏览器history对象
        this.history = createBrowserHistory(this.props)
        // 创建管理location的状态
        this.state = {
            location:this.history.location
        }
        // 开启监听路由地址的变化
        this.history.listen(location=>{
            this.setState({
                location 
            })
        })
    }
}
export default class MyRouterTest extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
