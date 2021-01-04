import MusicViewer from '../../components/MusicViewer'
import store from '../../redux/store'
import setParams from '../../redux/action/setParams'
import setPage from '../page/setPage'

export default function showSearchResult (arg) {
  console.log('arg:', arg)
  store.dispatch(setParams(arg))
  setPage(MusicViewer)
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
