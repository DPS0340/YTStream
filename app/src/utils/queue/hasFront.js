import store from '../../redux/store'

export default function hasFront () {
  const state = store.getState()
  const musicCursor = state.musicCursorReducer.musicCursor
  const musicQueue = state.musicQueueReducer.musicQueue
  const currentKeyword = state.keywordReducer.keyword
  return musicCursor < musicQueue[currentKeyword].length
}
