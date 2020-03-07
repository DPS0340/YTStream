
window.jQuery = window.$ = require('jquery')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Electron, { ipcRenderer } from 'electron'
import popper from '../../node_modules/popper.js/dist/umd/popper.min.js'
import bootstrapjs from '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import bootstrapcss from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../main.css'

console.log('Hello World!')

/**
 * send search keyword with ipcRenderer
 */
const find = (keyword) => {
  ipcRenderer.send('youtube-search-perform', keyword)
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
}


ipcRenderer.on('youtube-search-result', (event, arg) => {
  ReactDOM.render(<MusicViewer result={arg}></MusicViewer>,
    document.getElementById('main')
  )
})

class Music extends Component {
  render () {
    const e = this.props.elem
    return (
      <div className="container border border-primary">
        <div class="row">
          <div class="col-sm ml-0 pl-0">
            <a href={e.link}>
              <img src={e.thumbnail} className="rounded float-left" style={{"height": "200px", "width": "100%", "object-fit": "contain"}}></img>
            </a>
          </div>
          <div class="col-sm">
            <a href={e.link}><p className="lead">{e.title}</p></a>
            <p className="lead">{e.duration}</p>
          </div>
        </div>
      </div>
    )
    // audio stream TODO
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
    items.push(
      <button className="btn btn-primary" onClick={() => {searchQuery(nextUrl)}}>Next Page</button>
    )
    return (
      <div class="container">
      {items}
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <p className='lead'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aut eum autem consectetur ratione placeat inventore nihil nemo dolor ex ipsam dolorem recusandae, ipsa nisi labore natus unde sapiente repellendus.
      </p>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <footer className='footer font-small blue vertical-center text-center'>
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
          <a className='navbar-brand display-4' href={this.props.url} id='Navbar-Title'>
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