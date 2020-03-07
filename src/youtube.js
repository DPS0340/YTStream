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
    console.log(filter.ref)
    const val = await ytsr(null, options)
    return { "obj": val, "next": val.nextpageRef }
  } catch (err) {
    console.log('find failed', err)
  }
}

const findByUrl = async (ref) => {
  try {
    const options = {
      limit: 5,
      nextpageRef: `https://youtube.com${ref}`
    }
    const val = await ytsr(null, options)
    return { "obj": val, "next": val.nextpageRef }
  } catch (err) {
    console.log('find failed', err)
  }
}

const stream = (url) => {
  const yt = ytdl(url, {filter: 'audioonly'});
  // audio stream with express server TODO
}
export { find, findByUrl }