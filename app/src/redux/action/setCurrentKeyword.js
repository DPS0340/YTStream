const SETCURRENTKEYWORD = 'SETCURRENTKEYWORD'

function setCurrentKeyword (keyword) {
  return {
    type: SETCURRENTKEYWORD,
    set: keyword
  }
}

export { setCurrentKeyword as default, SETCURRENTKEYWORD }
