import store from '../../redux/store'

export default function hasFront () {
  const state = store.getState()
  const musicCursor = state.musicCursor
  const musicQueue = state.musicQueue
  const currentKeyword = state.keyword
  return musicCursor < musicQueue[currentKeyword].length
}
