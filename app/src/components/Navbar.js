import React, { useRef } from 'react'
import store from '../redux/store'
import searchBar from '../utils/search/searchBar'
import setCurrentPage from '../redux/action/setCurrentPage'
import Index from '../index'
import Proptypes from 'prop-types'

export default function Navbar ({ title }) {
  const setPage = (page) => store.dispatch(setCurrentPage(page))
  const searchFormRef = useRef(null)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBar(searchFormRef)
    }
  }
  return (
    <nav className='navbar navbar-dark bg-dark' role='navigation' id='navbar'>
      <div className='nav navbar-nav navbar-left'>
        <a className='navbar-brand display-4' href="#" onClick={() => setPage(Index)} id='Navbar-Title'>
          {title}
        </a>
      </div>
      <div className='nav navbar-nav navbar-right'>
        <div className="form-inline">
          <input ref={searchFormRef} className="form-control bg-dark text-white lead border border-white mr-1" onKeyPress={(e) => handleKeyPress(e)} type="search" placeholder="Search Youtube..." aria-label="Search" id="Search-Form" />
          <button className="btn btn-primary text-white lead" onClick={() => searchBar(searchFormRef)}>Search!</button>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: Proptypes.string
}
