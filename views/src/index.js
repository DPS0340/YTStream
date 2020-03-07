
window.jQuery = window.$ = require('jquery')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Electron from 'electron'
import popper from '../../node_modules/popper.js/dist/umd/popper.min.js'
import bootstrapjs from '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import bootstrapcss from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from '../main.css'

console.log('Hello World!')

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
      <footer className='footer font-small blue vertical-center text-center' id='footer'>
        <div className='lead'>
          2020 <a href='https://github.com/DPS0340/YTStream/graphs/contributors'>
          Contributors.
               </a><br />
          <a href='https://github.com/DPS0340/YTStream/blob/master/LICENSE' style='color: inherit; text-decoration-color:blue;'>
            MIT License
          </a><br />
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
          </a><br />
        </div>
      </footer>
    )
  }
}

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-dark bg-dark' role='navigation' id='navbar'>
        <div className='navbar-header'>
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
    <div class='jumbotron bg-light' id='wrapper'>

      {/* <!-- Navigation bar --> */}
      <div id='navbar-div' />

      {/* <!-- Main div --> */}
      <div class='vertical-center text-center container' id='main' />

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

const renderMain = () => {
  ReactDOM.render(<Main />,
    document.getElementById('main')
  )
  renderIndex()
}

renderMain()
