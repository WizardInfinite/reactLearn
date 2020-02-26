

export function createStore(reducer,enhancer){
    // 如果存在enhancer
    if(enhancer){
        return enhancer(createStore)(reducer)
    }
    let currentState = undefined;
    //回调函数的数组，有很多人去订阅它
    const currenListeners = []
    function getState(){
        return currentState
    }
    //更新状态
    function dispatch(action){
        //执行用户传来的reducer，并且把当前状态传递过去
        //这里相当于switch里的return state-1去更一下值
        // 1.修改
        currentState= reducer(currentState,action)
        // 变更通知
        currenListeners.forEach(v=>v())
        return action
    }
    function subscribe(cb){
        currenListeners.push(cb)
    }
    // 初始化状态
    dispatch({type:'@asdwqasdad'})
    // 创建store的实例，里面有几个接口
    return{
        getState,dispatch,subscribe
    }
}
export function applyMiddleware(...middlewares){
    return createStore=>(...args)=>{
        // 完成之前createStore的工作
        // args是reducer
        const store = createStore(...args);
        // 强化dispatch，在dispatch进入store之前，使用中间件
        let dispatch = store.dispatch;
        // 传递给中间件函数的参数
        const midApi = {
            getState:store.getState,
            dispatch:(...args)=>dispatch(...args)
        }
        // 将来中间件函数的签名：function({}){}
        // 遍历中间件
       const chain= middlewares.map(mw=>mw(midApi))
       //强化dispatch，让它可以按顺序执行中间件函数
       dispatch = compose(...chain)(store.dispatch)
       //返回全新的store,仅返回强化后的dispatch
       return{
           ...store,
           dispatch
       }
    }

}
export function compose(...funcs){
    if(funcs.length===0){
        return arg=>arg//接收参数返回参数，没有意义
    }
    if(funcs.length===1){
        return funcs[0]
    }
    // 聚和函数数组为一个函数[fn1,fn2]=>fn2(fn1())
    //得到的不是一个函数数组，而是一个函数
    return funcs.reduce((left,right)=>(...args)=>right(left(...args)))
}