
import React from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import showSearchResult from './utils/search/showSearchResult'
import Content from './hooks/Content'
import store from './redux/store'
import setMusicQueue from './redux/action/setMusicQueue'
import bootstrapjs from 'bootstrap/dist/js/bootstrap.min'
import bootstrapcss from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../main.css'

export const clearArray = function (arr) {
  arr.splice(0, arr.length)
}

ipcRenderer.on('youtube-search-result', (_, arg) => {
  const state = store.getState()
  const musicQueue = state.musicQueueReducer.musicQueue
  const currentKeyword = state.keywordReducer.keyword
  showSearchResult(arg)
  const queryonly = musicQueue[currentKeyword][musicQueue[currentKeyword].length - 1]
  const nextMusicQueue = { ...musicQueue }
  nextMusicQueue[currentKeyword][musicQueue[currentKeyword].length - 1] = { ...queryonly, ...arg }
  store.dispatch(setMusicQueue(nextMusicQueue))
})

export default function Index () {
  return (
    <div style={{ textAlign: 'center' }}>
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
      <Content id='index'/>
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
