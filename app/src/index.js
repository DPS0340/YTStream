
window.jQuery = window.$ = require('jquery')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Electron, { ipcRenderer } from 'electron'
import popper from 'popper.js/dist/umd/popper.min'
import bootstrapjs from 'bootstrap/dist/js/bootstrap.min'
import bootstrapcss from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../main.css'

console.log('Hello World!')

Array.prototype.clear = function() {
  this.splice(0, this.length);
}

let musicQueue = []
let musicCursor = musicQueue.length



/**
 * send search keyword with ipcRenderer
 */
const find = (keyword) => {
  ipcRenderer.send('youtube-search-perform', keyword)
  musicQueue = [ { query: keyword } ]
  musicCursor = musicQueue.length
}

const searchBar = () => {
  const val = document.getElementById('Search-Form').value
  document.getElementById('Search-Form').value = ""
  console.log(val)
  if (!val) {
    return
  }
  find(val)
}

const searchQuery = (query) => {
  ipcRenderer.send('youtube-search-query', query)
  musicQueue.push({ query })
  musicCursor = musicQueue.length
}

const hasFront = () => {
  return musicCursor < musicQueue.length
}

const queueFront = (query) => {
  if (hasFront()) {
    console.log("cached Front")
    showSearchResult(musicQueue[musicCursor++])
  } else {
    searchQuery(query)
  }
}

const hasBack = () => {
  return musicCursor >= 2
}

const queueBack = () => {
  if (hasBack()) {
    console.log("cached Back")
    showSearchResult(musicQueue[--musicCursor])
  } else {
    return
  }
}


const showSearchResult = (arg) => {
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
  const queryonly = musicQueue[musicQueue.length-1]
  musicQueue[musicQueue.length-1] = { ...queryonly, ...arg };
})

class MusicThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer : false
    }

    this.click = this.click.bind(this)
  }

  click () {
    this.setState({ showPlayer : true })
  }

  render () {
    const e = this.props.elem
    if (!this.state.showPlayer) {
      return (
        <div className="row">
          <div className="col-sm ml-0 pl-0" style={{"height": "250px"}}>
            <img onClick={this.click} src={e.thumbnail} className="rounded float-left" style={{"height": "160px", "width": "100%", "objectFit": "contain", "marginTop": "5px", "marginBottom": "5px"}}></img>
          </div>
          <div className="col-sm">
              <a href="#" onClick={this.click}><p className="lead">{e.title}</p></a>
              <a href={e.link}>{e.link}</a>
              <p className="lead">{e.duration}</p>
            </div>
        </div>

      )
    } else {
      return (
        <div className="row">
          <div className="col-sm ml-0 pl-0" style={{"height": "250px"}}>
            <img src={e.thumbnail} onClick={this.click} className="rounded float-left" style={{"height": "160px", "width": "100%", "objectFit": "contain", "marginTop": "5px", "marginBottom": "5px"}}></img>
            <audio controls autoPlay>
              <source src={`http://localhost:8890/watch/${e.link.replace("https://www.youtube.com/watch?v=", "")}`} type="audio/mpeg">
              </source>
            </audio>
          </div>
          <div className="col-sm">
              <a href="#" onClick={this.click}><p className="lead">{e.title}</p></a>
              <a href={e.link}>{e.link}</a>
              <p className="lead">{e.duration}</p>
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
    // audio stream TODO
  }
}

class MusicPrevNext extends Component {
  render () {
    const nextUrl = this.props.nextUrl
    if (hasBack()) {
      return (
        <div className="row mb-3">
          <div className="col-sm text-left">
            <button className="btn btn-success" onClick={() => {queueBack()}}>Previous Page</button>
          </div>
          <div className="col-sm text-right">
            <button className="btn btn-primary" onClick={() => {queueFront(nextUrl)}}>Next Page</button>
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
            <button className="btn btn-primary" onClick={() => {queueFront(nextUrl)}}>Next Page</button>
          </div>
        </div>
      )
    }
  }
}

class MusicViewer extends Component {
  render () {
    const elems = this.props.result.obj
    const nextUrl = this.props.result.next
    const items = []
    for (const e of elems.items) {
      items.push(
        <Music elem={e}></Music>
      )
    }
    items.push(<MusicPrevNext nextUrl={nextUrl} />)
    return (
      <div className="container">
      <p className="lead">{`${musicQueue[0].query} ${musicCursor} page`}</p>
      {items}
      </div>
    )
  }
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

class Footer extends Component {
  render () {
    return (
      <footer className='footer font-small blue vertical-center text-center fixed-bottom'>
        <div className='lead'>
          2020 <a href='https://github.com/DPS0340/YTStream/graphs/contributors'>
          Contributors.
          </a><br></br>
          <a href='https://github.com/DPS0340/YTStream/blob/master/LICENSE' style={{"color": "inherit", "textDecorationColor": "blue"}}>
            MIT License
          </a><br></br>
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
}

class Navbar extends Component {
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      searchBar()
    }
  }
  render () {
    return (
      <nav className='navbar navbar-dark bg-dark' role='navigation' id='navbar'>
        <div className='nav navbar-nav navbar-left'>
          <a className='navbar-brand display-4' href="#" onClick={() => renderIndex()} id='Navbar-Title'>
            {this.props.title}
          </a>
        </div>
        <div className='nav navbar-nav navbar-right'>
          <div className="form-inline">
            <input className="form-control bg-dark text-white lead border border-white mr-1" onKeyPress={this.handleKeyPress} type="search" placeholder="Search Youtube..." aria-label="Search" id="Search-Form" />
            <button className="btn btn-primary text-white lead" onClick={() => searchBar()}>Search!</button>
          </div>
        </div>
      </nav>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div className='jumbotron bg-light' id='wrapper'>

      {/* <!-- Navigation bar --> */}
      <div id='navbar-div' />

      {/* <!-- Main div --> */}
      <div className='vertical-center text-center container' id='main' />

      {/* <!-- Footer --> */}
      <div id='footer-div' />
    </div>
    )
  }
}

const renderIndex = () => {
  ReactDOM.render(<Navbar url='/' title='YTStream Player' />,
    document.getElementById('navbar-div')
  )
  ReactDOM.render(<Index />,
    document.getElementById('main')
  )
  ReactDOM.render(<Footer />,
    document.getElementById('footer-div')
  )
}

const renderRoot = () => {
  ReactDOM.render(<Main />,
    document.getElementById('root')
  )
  renderIndex()
}

renderRoot()