import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown1 } from '../../../svg'

export default function PopularPost() {
  return (
    <Link to='/' className='popular_wrap'>
      <div className='popular_text'>
        <div className='popular_text_top'>
          <span>Penulis</span>
          <ArrowDown1 />
          <span>Anggiat Benget</span>
        </div>
        <div className='popular_text_img'>
          <div className='text_left'>
            <h4>
              India's domestic airlines get a boost as cap on ticket prices
              lifts
            </h4>
            <div className='popular_date'>7 hours ago</div>
          </div>
          <img
            src='https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
            alt=''
          />
        </div>
      </div>
    </Link>
  )
}
