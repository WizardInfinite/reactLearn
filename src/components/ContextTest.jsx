import React from 'react';
// 1.创建上下文
const Context = React.createContext();
// 2.创建提供者和消费者
const Provider = Context.Provider;
const Consumer = Context.Consumer;
// widthConsumer组件，根据配置返回高阶组件
function widthConsumer(Consumer){
    return Comp=>props=>{
        return (
              <Consumer>
                    {value=><Comp {...value}></Comp>}
            </Consumer>
        )
    }
}
const WidthLog = Comp=>{
    return class extends React.Component{
        componentDidMount(){
            console.log('didMount',this.props)
        }
        render(){
            return(
                <Comp {...this.props}></Comp>
            )
        }
    }
}

const Child =WidthLog(widthConsumer(Consumer)(function Child(props){
    return(
        // 用箭头函数，保证this的指向
    <div onClick={()=>props.add()}>{props.count}</div>
    )
})) 
// function Child(props){
//     return(
//         // 用箭头函数，保证this的指向
//     <div onClick={()=>props.add()}>{props.count}</div>
//     )
// }
export default class ContextTest extends React.Component{
    state={
    count:0
    }
    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return (
            // 用Provider去提供值，用消费者去消费值
            // 这样才能实现不同组传递值
            <Provider value={{count:this.state.count,add:this.add}}>
                <Child></Child>
                {/* <Consumer>
                    {value=><Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value=><Child {...value}></Child>}
                </Consumer>
                <Consumer>
                    {value=><Child {...value}></Child>}
                </Consumer> */}
            </Provider>
        );
    }
}


