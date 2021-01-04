import { ipcRenderer } from 'electron'
import store from '../../redux/store'
import setMusicCursor from '../../redux/action/setMusicCursor'

export default function searchQuery (query) {
  const state = store.getState()
  const musicQueue = state.musicQueueReducer.musicQueue
  const currentKeyword = state.keywordReducer.keyword
  const nextMusicCursor = musicQueue[currentKeyword].length
  ipcRenderer.send('youtube-search-query', query)
  musicQueue[currentKeyword].push({ query })
  store.dispatch(setMusicCursor(nextMusicCursor))
}
