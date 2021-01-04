const SETCURRENTPAGE = 'SETCURRENTPAGE'

function setCurrentPage (page) {
  return {
    type: SETCURRENTPAGE,
    set: page
  }
}

export { setCurrentPage as default, SETCURRENTPAGE }
