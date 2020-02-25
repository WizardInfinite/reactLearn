import React, { Component } from 'react'
import {add,minus,asyncAdd} from '../store/counter'
import {connect} from 'react-redux'
// 参数1 mapStateToProps=(state)=>{return{num:state}}
// 参数2 mapDispatchToProps=dispatch=>{return{add:()=>dispatch({type:'add'})}}
// connect里加的东西会被放在props里
// connect有两个作用1.自动渲染2.将值映射到属性中去
@connect(
    state=>({num:state.counter}),
    {  
      add,minus,asyncAdd
    }
    )
 class ReduxTest extends Component {
    // componentDidMount(){
    //     // 去订阅，然后强制刷新，因为这里不像是在VUEX里一样
    //     store.subscribe(()=>{
    //         this.forceUpdate()
    //     })
    // }
    render() {
        return (
            <div>
               {/* {store.getState()}  */}
               {this.props.num}
               <button onClick={()=>this.props.add(2)}>加</button>
               <button onClick={()=>this.props.minus()}>减1</button>
               <button onClick={()=>this.props.asyncAdd()}>异步</button>
            </div>
        )
    }
}
export default ReduxTest