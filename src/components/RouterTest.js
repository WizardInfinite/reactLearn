import React, { Component } from 'react'
import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
function ProductList() {
    return (
        <div>
            this is list
            <h4>
                <Link to='/detail/web'>web全栈</Link> 
    
            </h4>
        </div>
    )
}
function Detail({match,history,location}) {
    return (
        <div>
            this is Detail
            {match.params.id}
        </div>
    )
}
function Managment() {
    return (
        <div>
            this is managment
        </div>
    )
}
@connect(
    state=>({isLogin:state.Login}),
    {
        username:(name)=>({type:'getuserInfo',names:name})
    }
)
class Login extends Component {

    render(){
console.log('1',this.props.isLogin)
        return (
            <div>
             {/* {this.props.isLogin} */}
                <button onClick={()=>this.props.username('烧饼')}>222</button>
            </div>
        )
    }
   
}
// 路由守卫  通过高阶组件包装Route，得到一个PrivateRoute
// 为PrivateRoute拓展用户状态检查的功能
// {component:Component,isLogin,...rest}
@connect(
    state=>({isLogin:state.Login}),
    {
        add:()=>({type:'getuserInfo'})
    }
    
)
class PrivateRoute extends Component{
    render(){
        // console.log(this.props)
        const { path, component:Component, isLogin } = this.props;
        if(isLogin.isLogin){
            return <Component></Component>
        }
        return(
            <Redirect to={{pathname:'/login',state:{redirect:path}}}></Redirect>
        )
    //     if(isLogin){
    //         return <Component></Component>
    //     }
    //    return(
    //        <Redirect to={{pathname:'/login'}}></Redirect>
    //    )
    }
    // return(
    //     <Route {...rest} render={
    //         // props====match,history,location
    //         props=>isLogin?(
    //             <Component></Component>
    //         ):(
    //             <Redirect to={{pathname:'/login',state:{redirect:props.location.pathname}}}></Redirect>
    //         )
    //     }></Route>
    // )
}
export default class RouterTest extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to='/'>列表|||||</Link>
                    <Link to='/managment'>管理</Link>
                </nav>
                {/* 路由配置 */}
                <Switch>
                <Route exact path='/' component={ProductList}></Route>
                <Route exact path='/detail/:id' component={Detail}></Route>
                <PrivateRoute path='/managment' component={Managment} isLogin={true}></PrivateRoute>
                <Route exact path='/login' component={Login}></Route>
                {/* 404 */}
                <Route component={()=><h3>页面不存在</h3>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
