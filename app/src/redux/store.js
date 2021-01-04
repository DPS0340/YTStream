import { createStore, combineReducers } from 'redux'
import pageReducer from './reducer/pageReducer'
import keywordReducer from './reducer/keywordReducer'
import musicCursorReducer from './reducer/musicCursorReducer'
import musicQueueReducer from './reducer/musicQueueReducer'

const store = createStore(combineReducers({ pageReducer, keywordReducer, musicCursorReducer, musicQueueReducer }))

console.log(store)

export default store
