const React = require('react')
const ReactDOM = require('react-dom')
const Electron = require('electron')

console.log('Hello World!')

class Index extends React.Component {
  render () {
    return (
      <p className='lead'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aut eum autem consectetur ratione placeat inventore nihil nemo dolor ex ipsam dolorem recusandae, ipsa nisi labore natus unde sapiente repellendus.
      </p>
    )
  }
}

class Footer extends React.Component {
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

class Navbar extends React.Component {
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

renderIndex()
