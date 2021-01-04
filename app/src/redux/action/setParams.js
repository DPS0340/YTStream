const SETPARAMS = 'SETPARAMS'

function setParams (queue) {
  return {
    type: SETPARAMS,
    set: queue
  }
}

export { setParams as default, SETPARAMS }
