const { SETMUSICCURSOR } = require('../action/setMusicCursor')

const initialState = {
  cursor: 0
}

export default function pageReducer (state = initialState, action) {
  switch (action.type) {
    case SETMUSICCURSOR:
      return {
        ...state,
        cursor: action.set
      }
    default:
      return state
  }
}
