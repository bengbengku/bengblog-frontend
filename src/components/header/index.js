import React, { useRef, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, Search } from '../../svg'
import { useSelector } from 'react-redux'
import SearchMenu from './SearchMenu'
import UserMenu from './userMenu'
import useClickOutside from '../../helpers/clickOutside'

export default function Header({ post }) {
  const { user } = useSelector((user) => ({ ...user }))
  const [showSearchMenu, setShowSearchMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenu = useRef(null)
  useClickOutside(userMenu, () => {
    setShowUserMenu(false)
  })
  return (
    <header>
      <div className='header_left'>
        <span className='header_logo'>
          <div className='circle'>
            <img src='../../icons/burgerbar.svg' alt='burgerbar' />
          </div>
          <Link to='/'>Bengblog</Link>
        </span>
      </div>
      <div className='header_middle'>
        <div className='search search1' onClick={() => setShowSearchMenu(true)}>
          <Search color='#65676b' />
          <input
            type='text'
            placeholder='Cari berdasarkan topik yang ingin kalian baca'
            className='hide_input'
          />
        </div>
      </div>
      {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
      <div className='header_right'>
        <span className='profile_link' ref={userMenu}>
          <span>
            {user?.first_name ? 'Hai' : 'Hai, selamat datang'}
            👏,
          </span>
          <span>
            {`${
              user?.first_name === 'Anggiat Benget' ? user.username : 'Bengblog'
            }`}
          </span>
          {user?.picture ? (
            <img
              src={user.picture}
              alt='penulis'
              onClick={() => setShowUserMenu((prev) => !prev)}
            />
          ) : (
            <div onClick={() => setShowUserMenu((prev) => !prev)}>
              <img
                src='https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
                alt='penulis'
              />
            </div>
          )}
          {showUserMenu && <UserMenu user={user} post={post} />}
        </span>
      </div>
    </header>
  )
}
