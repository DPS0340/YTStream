import find from './find'

export default function searchBar () {
  // useRef TODO
  const val = document.getElementById('Search-Form').value
  document.getElementById('Search-Form').value = ''
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}
