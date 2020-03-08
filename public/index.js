window.jQuery = window.$ = require('jquery')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import popper from 'popper.js/dist/umd/popper.min'
import bootstrapjs from 'bootstrap/dist/js/bootstrap.min'
import bootstrapcss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../app/main.css'

console.log("hello world!")

class Index extends Component {
  render () {
    return (
      <div>
        <p className='h1'>
            Welcome to YTStream audio server!
        </p>
        <p className='lead'>
            Please back to Electron app.
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
  render () {
    return (
        <nav className='navbar navbar-dark bg-dark' role='navigation' id='navbar'>
        <div className='nav navbar-nav navbar-left'>
            <a className='navbar-brand display-4' href={this.props.url} id='Navbar-Title'>
            {this.props.title}
            </a>
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