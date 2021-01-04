export default function searchBar (formRef) {
  const val = formRef.current.value
  formRef.current.value = ''
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}
