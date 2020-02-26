import React, { Component } from 'react'
import {createStore,applyMiddleware} from '../store/kredux'
const conuterReducer = function(state=0,action){
    const num = action.payload || 1
    console.log(action)
    switch (action.type) {
        case 'add':
            return state+num;
        case 'minus':
            return state-num     
        default:
            return state;
    }
}
// 自定义中间件
function logger({dispatch,getState}){
    // 返回中间件任务的
    return dispatch=>action=>{
        //执行中间件任务
        // 执行下一个中间件
        console.log(action.type+'执行了')
        return dispatch(action)//继续执行下一个中间件
    }
}
const store = createStore(conuterReducer,applyMiddleware(logger))
export default class MyRedux extends Component {
    componentDidMount(){
        store.subscribe(()=>this.forceUpdate())
    }
    render() {
        return (
            <div>
              {store.getState()}  
              <button onClick={()=>store.dispatch({type:'add'})}>+</button>
            </div>
        )
    }
}
