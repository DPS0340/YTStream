import React from 'react'
import PropTypes from 'prop-types'
import MusicThumbnail from './MusicThumbnail'

export default function Music ({ elem }) {
  return (
      <div className="container">
          <MusicThumbnail elem={elem} />
      </div>
  )
}

Music.propTypes = {
  elem: PropTypes.object
}
