const { SETMUSICQUEUE } = require('../action/setMusicQueue')

const initialState = {
  queue: {}
}

export default function pageReducer (state = initialState, action) {
  switch (action.type) {
    case SETMUSICQUEUE:
      return {
        ...state,
        queue: action.set
      }
    default:
      return state
  }
}
