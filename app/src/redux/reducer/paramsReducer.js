const { SETPARAMS } = require('../action/setParams')

const initialState = {
  params: {}
}

export default function musicQueueReducer (state = initialState, action) {
  switch (action.type) {
    case SETPARAMS:
      return {
        ...state,
        params: action.set
      }
    default:
      return state
  }
}
