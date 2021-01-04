import setMusicCursor from '../../redux/action/setMusicCursor'
import store from '../../redux/store'
import showSearchResult from '../search/showSearchResult'
import hasBack from './hasBack'

export default function queueBack () {
  const state = store.getState()
  const musicCursor = state.musicCursor
  const musicQueue = state.musicQueue
  const currentKeyword = state.keyword
  if (!hasBack()) {
    return
  }
  console.log('cached Back')
  console.log(musicQueue[currentKeyword])
  showSearchResult(musicQueue[currentKeyword][musicCursor - 2])
  store.dispatch(setMusicCursor(musicCursor - 1))
}
