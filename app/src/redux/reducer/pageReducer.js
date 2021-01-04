const { Index: IndexPage } = require('../../index')
const { SETCURRENTPAGE } = require('../action/setCurrentPage')

const initialState = {
  page: IndexPage
}

function pageReducer (state = initialState, action) {
  switch (action.type) {
    case SETCURRENTPAGE:
      return {
        ...state,
        page: action.set
      }
    default:
      return state
  }
}

export default pageReducer
