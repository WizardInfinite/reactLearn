const initialLogin = {
    isLogin:false,
    user:{name:null}
}
export const loginReducer= function (state={...initialLogin},action){
    console.log(action)
    const token = window.localStorage.getItem('token');
    switch (action.type) {
        case 'getuserInfo':
            return initialLogin.user.name=action.names
        case 'loginSuccess':
            return {...state,isLogin:token?true:false}
        default:
            return{...initialLogin}
    }
}