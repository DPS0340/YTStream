const { SETMUSICCURSOR } = require('../action/setMusicCursor')

const initialState = {
  musicCursor: 0
}

export default function musicCursorReducer (state = initialState, action) {
  switch (action.type) {
    case SETMUSICCURSOR:
      return {
        ...state,
        musicCursor: action.set
      }
    default:
      return state
  }
}
