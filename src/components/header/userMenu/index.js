import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useClickOutside from '../../../helpers/clickOutside'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

export default function UserMenu({ user, post }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    Cookies.set('user', '')
    dispatch({
      type: 'LOGOUT',
    })
    navigate('/')
  }
  return (
    <div className='mmenu'>
      <div className={`mmenu_header hover3 ${user ? 'client_span' : ''}`}>
        <img
          src={
            user?.picture
              ? user.picture
              : 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
          }
          alt={user?.first_name ? user.first_name : 'Photo profile bengblog'}
        />
        <div className={`mmenu_col ${user ? 'user_span_not' : ''}`}>
          <span>
            {user
              ? `${user?.first_name} ${user?.last_name}`
              : 'Sudah punya akun?'}
          </span>
          <span style={{ transform: `${!user ? 'translateX(-16px)' : ''}` }}>
            {user ? (
              'Selamat membaca :)'
            ) : (
              <Link to='/login'>Silahkan Masuk</Link>
            )}
          </span>
        </div>
      </div>
      <div className='mmenu_splitter'></div>
      {user && !post ? (
        <Link to='/post' className='mmenu_main hover3'>
          <div className='small_circle circle_transform'>
            <i className='m_post_icon'></i>
          </div>
          <div className='mmenu_col'>
            <div className='mmenu_span1'>Buat postingan</div>
            <div className='mmenu_span2'>Ayo buat semenarik mungkin ya😋</div>
          </div>
        </Link>
      ) : (
        <div className='mmenu_main hover3'>
          <div className='small_circle circle_transform'>
            <i className='report_filled_icon'></i>
          </div>
          <div className='mmenu_col'>
            <div className='mmenu_span1'>Give feedback</div>
            <div className='mmenu_span2'>
              Ya, itu akan bermanfaat untuk kemajuan blog ini
            </div>
          </div>
        </div>
      )}
      {user && <div className='mmenu_splitter'></div>}
      {user && (
        <div
          className='mmenu_item hover3'
          onClick={() => {
            logout()
          }}
        >
          <div className='small_circle'>
            <i className='logout_filled_icon'></i>
          </div>
          <span className='log_span'>Logout</span>
        </div>
      )}
    </div>
  )
}
