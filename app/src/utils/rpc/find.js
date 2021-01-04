/**
 * send search keyword with ipcRenderer
 */
export default function find (keyword) {
  musicCursor = 1
  currentKeyword = keyword
  if (!musicQueue[keyword]) {
    ipcRenderer.send('youtube-search-perform', keyword)
    musicQueue[keyword] = [{ query: keyword }]
  } else {
    console.log('cached Keyword')
    showSearchResult(musicQueue[keyword][0])
  }
}
