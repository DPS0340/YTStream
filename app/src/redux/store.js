import { createStore, combineReducers } from 'redux'
import pageReducer from './reducer/pageReducer'

const store = createStore(combineReducers({ pageReducer }))

console.log(store)

export default store
