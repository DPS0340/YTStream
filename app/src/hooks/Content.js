import { createElement, useState } from 'react'
import store from '../redux/store'

function Content () {
  const initialPage = store.getState().pageReducer.page
  console.log(store.getState())
  const [currentPage, setCurrentPage] = useState(createElement(initialPage))
  store.subscribe(() => {
    const page = store.getState().pageReducer.page
    console.log('page: ', page)
    setCurrentPage(createElement(page))
  })
  return currentPage
}

export default Content
