import { ipcRenderer } from 'electron'
import store from '../../redux/store'
import setCurrentKeyword from '../../redux/action/setCurrentKeyword'
import setMusicCursor from '../../redux/action/setMusicCursor'
import showSearchResult from '../search/showSearchResult'

/**
 * send search keyword with ipcRenderer
 */
export default function find (keyword) {
  const state = store.getState()
  const musicQueue = state.musicQueueReducer.musicQueue
  store.dispatch(setCurrentKeyword(keyword))
  store.dispatch(setMusicCursor(1))
  if (!musicQueue[keyword]) {
    ipcRenderer.send('youtube-search-perform', keyword)
    musicQueue[keyword] = [{ query: keyword }]
  } else {
    console.log('cached Keyword')
    showSearchResult(musicQueue[keyword][0])
  }
}
