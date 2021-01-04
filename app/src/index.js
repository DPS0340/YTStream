
import React from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import showSearchResult from './utils/search/showSearchResult'
import Content from './hooks/Content'
import store from './redux/store'

export const clearArray = function (arr) {
  arr.splice(0, arr.length)
}

ipcRenderer.on('youtube-search-result', (_, arg) => {
  const state = store.getState()
  const musicQueue = state.musicQueue
  const currentKeyword = state.keyword
  showSearchResult(arg)
  const queryonly = musicQueue[currentKeyword][musicQueue[currentKeyword].length - 1]
  musicQueue[currentKeyword][musicQueue[currentKeyword].length - 1] = { ...queryonly, ...arg }
})

export default function Index () {
  return (
    <div>
      <p className='lead'>
        YTStream 2021
      </p>
      <p className='lead'>
        Search it!
      </p>
    </div>
  )
}

const Main = () => {
  return (
    <div id='main'>
      <Navbar id='navbar' url='/' title='YTStream Player' />
      <Content />
      <Footer id='footer'/>
    </div>
  )
}

const renderRoot = () => {
  ReactDOM.render(<Main />,
    document.getElementById('root')
  )
}

console.log('Hello World!')
renderRoot()
