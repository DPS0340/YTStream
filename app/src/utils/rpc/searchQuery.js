export default function searchQuery (query) {
  ipcRenderer.send('youtube-search-query', query)
  musicQueue[currentKeyword].push({ query })
  musicCursor = musicQueue[currentKeyword].length
}
