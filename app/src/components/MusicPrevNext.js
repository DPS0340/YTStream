import React from 'react'
import PropTypes from 'prop-types'
import queueBack from '../utils/queue/queueBack'
import queueFront from '../utils/queue/queueFront'
import hasBack from '../utils/queue/hasBack'

export default function MusicPrevNext ({ nextUrl }) {
  const availablePrevButton = <button className="btn btn-success" onClick={() => { queueBack() }}>Previous Page</button>
  const notAvailablePrevButton = <button className="btn btn-dark">Previous Page</button>
  const PrevButton = hasBack() ? availablePrevButton : notAvailablePrevButton
  return (
      <div className="row mb-3">
        <div className="col-sm text-left">
          {PrevButton}
        </div>
        <div className="col-sm text-right">
          <button id="nextButton" className="btn btn-primary" onClick={() => { queueFront(nextUrl) }}>Next Page</button>
        </div>
      </div>
  )
}

MusicPrevNext.propTypes = {
  nextUrl: PropTypes.string
}
