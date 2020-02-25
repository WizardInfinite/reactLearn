import {createStore,applyMiddleware,combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {conuterReducer} from './counter'
// 在仓库里去塞处理仓库东西的方法（即更改状态）
const store = createStore(
    combineReducers({counter:conuterReducer}),
    applyMiddleware(logger,thunk))
export default store