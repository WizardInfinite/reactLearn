import React, { Component,useState,useEffect } from 'react'
// 使用Hooks 
// 函数组件进行进行状态管理useState useEffect
// Hoos只能在16.8.xx以后的版本里使用
function Clock(){
    // 进行解构 创建状态，useState返回状态和修改状态函数所组成的数组
    // 在这里面其中date相当于this.state.date  setDate是操作状态的函数
    // console.log(useState(new Date())  )
    const [date,setDate] = useState(new Date())  
    // 当进行一些副作用的操作时，比如异步等等，需要用useEffect进行操作
    useEffect(() => {
       const timeId = setInterval(() => {
           setDate(new Date())
       }, 1000);
        return () => {
            // 这里面是释放操作
            clearInterval(timeId)
        };
    }, []);//这个空数组指的的是状态依赖，当某个状态改变的时候需要重新执行这个函数
    // 在本例中只需要初始化的时候执行一次，所以传递了一个空的数组
    return(
    <div>{date.toLocaleTimeString()}</div>
    )
}


export default class StateHooks extends Component {
    
    render() {
        return (
            <div>
               <Clock />
            </div>
        )
    }
}
