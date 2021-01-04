import React from 'react'
import ReactDOM from 'react-dom'

export default function showSearchResult (arg) {
  console.log('arg:', arg)
  ReactDOM.render(<MusicViewer result={arg} />,
    document.getElementById('main')
  )
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
