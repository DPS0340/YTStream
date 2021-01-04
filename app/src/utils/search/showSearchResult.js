import React from 'react'
import ReactDOM from 'react-dom'
import MusicViewer from '../../components/MusicViewer'
import setPage from '../page/setPage'

export default function showSearchResult (arg) {
  console.log('arg:', arg)
  setPage(MusicViewer)
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
