'use strict'

const ytdl = require('ytdl-core')
const ytsr = require('ytsr')

/**
 * Find youtube videos by name. five per page
 */
const find = async (name) => {
  try {
    let filter = await ytsr.getFilters(name)
    filter = filter.get('Type').find(o => o.name === 'Video')
    const options = {
      limit: 5,
      nextpageRef: filter.ref
    }
    const val = await ytsr(null, options)
    return { items: val.items, next: filter.ref }
  } catch (err) {
    console.log('find failed', err)
  }
}

const findByUrl = async (ref) => {
  try {
    let filter = await ytsr.getFilters(ref)
    filter = filter.get('Type').find(o => o.name === 'Video')
    const options = {
      limit: 5,
      nextpageRef: filter.ref
    }
    const val = await ytsr(null, options)
    return { items: val.items, next: filter.ref }
  } catch (err) {
    console.log('find failed', err)
  }
}

export { find, findByUrl }
