import React from 'react'

export function Contributors () {
  return (
    <div>
      2020 <a href='https://github.com/DPS0340/YTStream/graphs/contributors'>
      Contributors.
      </a>
    </div>
  )
}

export function License () {
  return (
    <a href='https://github.com/DPS0340/YTStream/blob/master/LICENSE' style={{ color: 'inherit', textDecorationColor: 'blue' }}>
      MIT License
    </a>
  )
}

export function Contribute () {
  return (
    <div>
      <a href='https://github.com/DPS0340/YTStream' className='badge badge-secondary'>
        <span className='h4 lead'>
          GitHub
        </span>
      </a>
      <a href='https://github.com/DPS0340/YTStream' className='badge badge-primary'>
        <span className='h4 lead'>
          Contribute us!
        </span>
      </a>
    </div>
  )
}

export default function Footer () {
  return (
      <footer className='footer font-small blue vertical-center text-center fixed-bottom'>
        <div className='lead'>
          <Contributors />
          <License />
        </div>
        <Contribute />
      </footer>
  )
}
