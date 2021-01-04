const SETMUSICQUEUE = 'SETMUSICQUEUE'

function setMusicQueue (queue) {
  return {
    type: SETMUSICQUEUE,
    set: queue
  }
}

export { setMusicQueue as default, SETMUSICQUEUE }
