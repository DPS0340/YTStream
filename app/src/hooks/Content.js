import { createElement, useState } from 'react'
import store from '../redux/store'

function Content () {
  const initialPage = store.getState().pageReducer.page
  console.log(store.getState())
  const [currentPage, setCurrentPage] = useState(createElement(initialPage))
  store.subscribe(() => {
    const state = store.getState()
    const page = state.pageReducer.page
    const params = state.paramsReducer.params
    console.log('params: ', params)
    console.log('page: ', page)
    setCurrentPage(createElement(page, params))
  })
  return currentPage
}

export default Content
