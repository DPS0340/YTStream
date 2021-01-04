import store from '../../redux/store'

export default function hasBack () {
  const musicCursor = store.getState().musicCursor
  return musicCursor >= 2
}
