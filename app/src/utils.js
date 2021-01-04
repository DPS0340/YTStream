
const searchBar = () => {
  const val = document.getElementById('Search-Form').value
  document.getElementById('Search-Form').value = ''
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}
