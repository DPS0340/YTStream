import React from 'react'
import PropTypes from 'prop-types'

export default function AudioPanel ({ watchUrl }) {
  return (
    <audio controls autoPlay preload="auto" disablePictureInPicture controlsList="nodownload">
        <source src={watchUrl} type="audio/mp3">
        </source>
        Your browser does not support the audio element.
    </audio>
  )
}

AudioPanel.propTypes = {
  watchUrl: PropTypes.string
}
