import React from 'react'

export default function Navbar () {
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
