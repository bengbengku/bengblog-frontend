import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeftLink from './LeftLink'
import { ArrowDown1 } from '../../../svg'
import { left } from '../../../data/home'
import './style.css'

export default function LeftHome({ user }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className='left_home scrollbar2'>
      <Link to={user ? '/profile' : '/login'} className='left_link'>
        <img
          src={
            user
              ? user.picture
              : 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
          }
          alt='bengblog website'
        />
        {user ? (
          <span>
            {user.first_name} {user.last_name}
          </span>
        ) : (
          <div className='left_link_login'>
            <span>Sudah punya akun?</span>
            <span>Silahkan masuk</span>
          </div>
        )}
      </Link>
      {left.slice(0, 6).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))}
      {!visible && (
        <div
          className='left_link hover2'
          onClick={() => {
            setVisible(true)
          }}
        >
          <div className='small_circle'>
            <ArrowDown1 />
          </div>
          <span>Lebih banyak</span>
        </div>
      )}
      {visible && (
        <div className='more_left'>
          {left.slice(6, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div
            className='left_link hover2 '
            onClick={() => {
              setVisible(false)
            }}
          >
            <div className='small_circle rotate360'>
              <ArrowDown1 />
            </div>
            <span>Lebih sedikit</span>
          </div>
        </div>
      )}
    </div>
  )
}
