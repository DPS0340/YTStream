import React, { useEffect, useState } from 'react'
import { localServerUrl } from '../constants'
import AudioPanel from './AudioPanel'
import Proptypes from 'prop-types'

export default function MusicThumbnail ({ elem: e }) {
  const [showPlayer, setShowPlayer] = useState(false)
  const handleClick = () => setShowPlayer(!showPlayer)
  const replacedLink = e.url.split('?v=')[1]

  const downloadUrl = `${localServerUrl}/download/${replacedLink}`
  const watchUrl = `${localServerUrl}/watch/${replacedLink}`
  const downloadMp3Url = `${downloadUrl}.mp3`

  const thumbnailStyle = { height: '250px', width: '100%', objectFit: 'contain', marginTop: '5px', marginBottom: '5px' }
  const showThumbnailStyle = { ...thumbnailStyle, height: '180px' }
  const thumbnailUrl = e.bestThumbnail.url

  const audioPanel = showPlayer
    ? <AudioPanel watchUrl={watchUrl} />
    : null
  useEffect(() => {
    setShowPlayer(false)
  }, [e])
  return (
        <div className="row">
          <div className="col-sm ml-0 pl-0" style={{ height: '250px' }}>
            <img src={thumbnailUrl} onClick={handleClick} className="rounded float-left" style={showThumbnailStyle}></img>
            {audioPanel}
          </div>
          <div className="col-sm">
              <a href="#" onClick={handleClick}>
                <p className="lead">{e.title}</p>
              </a>
              <a href={e.link}>{e.link}</a>
              <p className="lead">{e.duration}</p>
              <a className="btn btn-success" href={downloadUrl} download={downloadMp3Url}>
                다운로드
              </a>
          </div>
        </div>
  )
}

MusicThumbnail.propTypes = {
  elem: Proptypes.object
}
