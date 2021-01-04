
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'
import PropTypes from 'prop-types'

console.log('Hello World!')

export const clearArray = function (arr) {
  arr.splice(0, arr.length)
}

const musicQueue = {}
let musicCursor = 0
let currentKeyword = ''

/**
 * send search keyword with ipcRenderer
 */
const find = (keyword) => {
  musicCursor = 1
  currentKeyword = keyword
  if (!musicQueue[keyword]) {
    ipcRenderer.send('youtube-search-perform', keyword)
    musicQueue[keyword] = [{ query: keyword }]
  } else {
    console.log('cached Keyword')
    showSearchResult(musicQueue[keyword][0])
  }
}

const searchBar = () => {
  const val = document.getElementById('Search-Form').value
  document.getElementById('Search-Form').value = ''
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}

const searchQuery = (query) => {
  ipcRenderer.send('youtube-search-query', query)
  musicQueue[currentKeyword].push({ query })
  musicCursor = musicQueue[currentKeyword].length
}

const hasFront = () => {
  return musicCursor < musicQueue[currentKeyword].length
}

const queueFront = (query) => {
  if (hasFront()) {
    console.log('cached Front')
    showSearchResult(musicQueue[currentKeyword][musicCursor++])
  } else {
    searchQuery(query)
  }
}

const hasBack = () => {
  return musicCursor >= 2
}

const queueBack = () => {
  if (!hasBack()) {
    return
  }
  console.log('cached Back')
  console.log(musicQueue[currentKeyword])
  showSearchResult(musicQueue[currentKeyword][--musicCursor - 1])
}

const showSearchResult = (arg) => {
  console.log('arg:', arg)
  ReactDOM.render(<MusicViewer result={arg}></MusicViewer>,
    document.getElementById('main')
  )
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

ipcRenderer.on('youtube-search-result', (event, arg) => {
  showSearchResult(arg)
  const queryonly = musicQueue[currentKeyword][musicQueue[currentKeyword].length - 1]
  musicQueue[currentKeyword][musicQueue[currentKeyword].length - 1] = { ...queryonly, ...arg }
})

class MusicThumbnail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPlayer: false
    }

    this.click = this.click.bind(this)
  }

  click () {
    if (this.state.showPlayer === false) {
      this.setState({ showPlayer: true })
    } else {
      this.setState({ showPlayer: false })
    }
  }

  render () {
    const e = this.props.elem
    const replacedLink = e.url.replace('https://www.youtube.com/watch?v=', '')
    const downloadUrl = `http://localhost:8890/download/${replacedLink}`
    const downloadMp3Url = `${downloadUrl}.mp3`
    const thumbnailStyle = { height: '250px', width: '100%', objectFit: 'contain', marginTop: '5px', marginBottom: '5px' }
    const thumbnailUrl = e.bestThumbnail.url
    const watchUrl = `http://localhost:8890/watch/${replacedLink}`
    const showThumbnailStyle = { height: '180px', width: '100%', objectFit: 'contain', marginTop: '5px', marginBottom: '5px' }
    if (!this.state.showPlayer) {
      return (
        <div className="row">
          <div className="col-sm ml-0 pl-0" style={{ height: '250px' }}>
            <img onClick={this.click} src={thumbnailUrl} className="rounded float-left" style={thumbnailStyle}></img>
          </div>
          <div className="col-sm">
              <a href="#" onClick={this.click}><p className="lead">{e.title}</p></a>
              <a href={e.link}>{e.link}</a>
              <p className="lead">{e.duration}</p>
              <a className="btn btn-success" href={downloadUrl} download={downloadMp3Url}>
                다운로드
              </a>
            </div>
        </div>

      )
    } else {
      return (
        <div className="row">
          <div className="col-sm ml-0 pl-0" style={{ height: '250px' }}>
            <img src={thumbnailUrl} onClick={this.click} className="rounded float-left" style={showThumbnailStyle}></img>
            <audio controls autoPlay preload="auto" disablePictureInPicture controlsList="nodownload">
              <source src={watchUrl} type="audio/mp3">
              </source>
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="col-sm">
              <a href="#" onClick={this.click}><p className="lead">{e.title}</p></a>
              <a href={e.link}>{e.link}</a>
              <p className="lead">{e.duration}</p>
              <a className="btn btn-success" href={downloadUrl} download={downloadMp3Url}>
                다운로드
              </a>
            </div>
        </div>

      )
    }
  }
}

class Music extends Component {
  render () {
    const e = this.props.elem
    return (
      <div className="container">
          <MusicThumbnail elem={e} />

      </div>
    )
  }
}

class MusicPrevNext extends Component {
  render () {
    const nextUrl = this.props.nextUrl
    if (hasBack()) {
      return (
        <div className="row mb-3">
          <div className="col-sm text-left">
            <button className="btn btn-success" onClick={() => { queueBack() }}>Previous Page</button>
          </div>
          <div className="col-sm text-right">
            <button className="btn btn-primary" onClick={() => { queueFront(nextUrl) }}>Next Page</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="row mb-3">
          <div className="col-sm text-left">
            <button className="btn btn-dark">Previous Page</button>
          </div>
          <div className="col-sm text-right">
            <button className="btn btn-primary" onClick={() => { queueFront(nextUrl) }}>Next Page</button>
          </div>
        </div>
      )
    }
  }
}

const MusicViewer = ({ result: { obj: elems, next: nextUrl } }) => {
  const items = elems.map((e, idx) => <Music elem={e} key={idx}></Music>)
  items.push(<MusicPrevNext nextUrl={nextUrl} key="next" />)
  return (
    <div className="container">
    <p className="lead">{`${musicQueue[currentKeyword][0].query} ${musicCursor} page`}</p>
    {items}
    </div>
  )
}

MusicViewer.propTypes = {
  children: PropTypes.any,
  onClickOut: PropTypes.func
}

class Index extends Component {
  render () {
    return (
      <div>
        <p className='lead'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aut eum autem consectetur ratione placeat inventore nihil nemo dolor ex ipsam dolorem recusandae, ipsa nisi labore natus unde sapiente repellendus.
        </p>
      </div>
    )
  }
}

const Footer = () => {
  return (
    <footer className='footer font-small blue vertical-center text-center fixed-bottom'>
      <div className='lead'>
        2020 <a href='https://github.com/DPS0340/YTStream/graphs/contributors'>
        Contributors.
        </a>
        <br />
        <a href='https://github.com/DPS0340/YTStream/blob/master/LICENSE' style={{ color: 'inherit', textDecorationColor: 'blue' }}>
          MIT License
        </a>
        <br />
      </div>
      <div>
        <a href='https://github.com/DPS0340/YTStream' className='badge badge-secondary'>
          <span className='h4 lead'>
            GitHub
          </span>
        </a>
        <a href='https://github.com/DPS0340/YTStream' className='badge badge-primary'>
          <span className='h4 lead'>
            Contribute us!
          </span>
        </a><br></br>
      </div>
    </footer>
  )
}

const Navbar = () => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBar()
    }
  }
  return (
    <nav className='navbar navbar-dark bg-dark' role='navigation' id='navbar'>
      <div className='nav navbar-nav navbar-left'>
        <a className='navbar-brand display-4' href="#" onClick={() => renderIndex()} id='Navbar-Title'>
          {this.props.title}
        </a>
      </div>
      <div className='nav navbar-nav navbar-right'>
        <div className="form-inline">
          <input className="form-control bg-dark text-white lead border border-white mr-1" onKeyPress={handleKeyPress} type="search" placeholder="Search Youtube..." aria-label="Search" id="Search-Form" />
          <button className="btn btn-primary text-white lead" onClick={() => searchBar()}>Search!</button>
        </div>
      </div>
    </nav>
  )
}

const Main = () => {
  return (
    <div id='main'>
      <Navbar id='navbar' url='/' title='YTStream Player' />
      <Index id='index'/>
      <Footer id='footer'/>
    </div>
  )
}

const renderRoot = () => {
  ReactDOM.render(<Main />,
    document.getElementById('root')
  )
}

renderRoot()
