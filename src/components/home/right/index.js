import React from 'react'
import PopularPost from './PopularPost'
import './style.css'

export default function RightHome() {
  return (
    <div className='right_home'>
      <div className='popular_wrapper'>
        <div className='heading'>Terpopuler</div>
        <div className='splitter1'></div>
        <PopularPost />
        <PopularPost />
        <PopularPost />
      </div>
    </div>
  )
}
