import store from '../../redux/store'

export default function hasBack () {
  const musicCursor = store.getState().musicCursorReducer.musicCursor
  return musicCursor >= 2
}
