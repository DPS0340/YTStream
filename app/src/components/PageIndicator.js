import React from 'react'
import PropTypes from 'prop-types'

export default function PageIndicator ({ musicQueue: queue, currentKeyword, musicCursor }) {
  return (
    <p className="lead">{`${queue[currentKeyword][0].query} ${musicCursor} page`}</p>
  )
}

PageIndicator.propTypes = {
  musicQueue: PropTypes.object,
  currentKeyword: PropTypes.string,
  musicCursor: PropTypes.number
}
