const SETMUSICCURSOR = 'SETMUSICCURSOR'

function setMusicCursor (cursor) {
  return {
    type: SETMUSICCURSOR,
    set: cursor
  }
}

export { setMusicCursor as default, SETMUSICCURSOR }
