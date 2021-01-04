import setCurrentPage from '../../redux/action/setCurrentPage'
import store from '../../redux/store'

export default function setPage (page) {
  return store.dispatch(setCurrentPage(page))
}
