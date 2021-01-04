const { SETMUSICQUEUE } = require('../action/setMusicQueue')

const initialState = {
  musicQueue: {}
}

export default function musicQueueReducer (state = initialState, action) {
  switch (action.type) {
    case SETMUSICQUEUE:
      return {
        ...state,
        musicQueue: action.set
      }
    default:
      return state
  }
}
