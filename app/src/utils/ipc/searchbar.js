import find from './find'

export default function searchBar (ref) {
  const val = ref.current.value
  ref.current.value = ''
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}
