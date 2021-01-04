import React from 'react'
import PropTypes from 'prop-types'
import Music from './Music'
import MusicPrevNext from './MusicPrevNext'

export default function MusicViewer ({ obj: elems, next }) {
  const items = elems.map((e, idx) => <Music elem={e} key={idx} />)
  items.push(<MusicPrevNext nextUrl={next[0]} key="next" />)
  return (
      <div className="container">
      {items}
      </div>
  )
}
MusicViewer.propTypes = {
  obj: PropTypes.array,
  next: PropTypes.array
}
