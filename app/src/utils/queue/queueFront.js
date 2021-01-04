import store from '../../redux/store'
import showSearchResult from '../search/showSearchResult'
import setMusicCursor from '../../redux/action/setMusicCursor'
import hasFront from './hasFront'
import searchQuery from '../ipc/searchQuery'

export default function queueFront (query) {
  const state = store.getState()
  const musicCursor = state.musicCursor
  const musicQueue = state.musicQueue
  const currentKeyword = state.keyword
  if (hasFront()) {
    console.log('cached Front')
    showSearchResult(musicQueue[currentKeyword][musicCursor])
    store.dispatch(setMusicCursor(musicCursor + 1))
  } else {
    searchQuery(query)
  }
}
