import React from 'react'
import PropTypes from 'prop-types'
import Music from './Music'
import MusicPrevNext from './MusicPrevNext'

export default function MusicViewer ({ result: { obj: elems, next: nextUrl } }) {
  const items = elems.map((e, idx) => <Music elem={e} key={idx} />)
  items.push(<MusicPrevNext nextUrl={nextUrl} key="next" />)
  return (
      <div className="container">
      {items}
      </div>
  )
}
MusicViewer.propTypes = {
  result: PropTypes.shape({
    obj: PropTypes.object,
    next: PropTypes.string
  })
}
