'use strict'

const ytsr = require('ytsr')

/**
 * Find youtube videos by name. five per page
 */
const find = async (name) => {
  try {
    let filter = await ytsr.getFilters(name)
    filter = filter.get('Type').get('Video')
    const options = {
      limit: 5,
      pages: 1
    }
    console.log(filter.url)
    const val = await ytsr(filter.url, options)
    return { obj: val.items, next: val.continuation }
  } catch (err) {
    console.log('find failed', err)
  }
}

const findByUrl = async (continuation) => {
  try {
    const val = await ytsr.continueReq(continuation)
    console.log(val)
    return { obj: val.items, next: val.continuation }
  } catch (err) {
    console.log('find failed', err)
  }
}

export { find, findByUrl }
