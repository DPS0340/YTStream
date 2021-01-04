import { createStore, combineReducers } from 'redux'
import pageReducer from './reducer/pageReducer'
import keywordReducer from './reducer/keywordReducer'
import musicCursorReducer from './reducer/musicCursorReducer'
import musicQueueReducer from './reducer/musicQueueReducer'
import paramsReducer from './reducer/paramsReducer'

const store = createStore(combineReducers({ pageReducer, keywordReducer, musicCursorReducer, musicQueueReducer, paramsReducer }))

console.log(store)

export default store
