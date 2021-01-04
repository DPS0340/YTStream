
export default function queueBack () {
  if (!hasBack()) {
    return
  }
  console.log('cached Back')
  console.log(musicQueue[currentKeyword])
  showSearchResult(musicQueue[currentKeyword][--musicCursor - 1])
}
