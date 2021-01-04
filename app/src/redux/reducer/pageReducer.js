import Index from '../../index'
import SETCURRENTPAGE from '../action/setCurrentPage'

const initialState = {
  page: Index
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
