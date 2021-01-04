const { SETCURRENTKEYWORD } = require('../action/setCurrentKeyword')

const initialState = {
  keyword: ''
}

export default function keywordReducer (state = initialState, action) {
  switch (action.type) {
    case SETCURRENTKEYWORD:
      return {
        ...state,
        keyword: action.set
      }
    default:
      return state
  }
}
