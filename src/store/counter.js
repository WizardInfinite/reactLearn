  // 同步返回的是action，是对象
  export const add=(num)=>({type:'add',payload:num})
  export const minus=()=>({type:'minus'})
  // 返回异步的函数
  export const asyncAdd=()=>dispatch=>{
   setTimeout(()=>{
     dispatch({type:'add',payload:10})  
   },1000)   
  }
  export const conuterReducer = function(state=0,action){
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