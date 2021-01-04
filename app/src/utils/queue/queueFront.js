export default function queueFront (query) {
  if (hasFront()) {
    console.log('cached Front')
    showSearchResult(musicQueue[currentKeyword][musicCursor++])
  } else {
    searchQuery(query)
  }
}
