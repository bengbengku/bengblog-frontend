import React, { useEffect, useRef, useState } from 'react'
import { Return, Search } from '../../svg'
import useClickOutside from '../../helpers/clickOutside'
import { Link } from 'react-router-dom'

export default function SearchMenu({ setShowSearchMenu }) {
  const [iconVisible, setIconVisible] = useState(true)
  const menu = useRef(null)
  const input = useRef(null)
  useClickOutside(menu, () => {
    setShowSearchMenu(false)
  })
  useEffect(() => {
    input.current.focus()
  }, [])
  return (
    <div className='header_middle search_area scrollbar' ref={menu}>
      <div className='search_wrap'>
        <div
          className='header_logo_search'
          onClick={() => setShowSearchMenu(false)}
        >
          <div className='circle hover1'>
            <Return color='#fff' />
          </div>
        </div>
        <div
          className='search'
          onClick={() => {
            input.current.focus()
          }}
        >
          {iconVisible && (
            <div>
              <Search color='#65676b' />
            </div>
          )}
          <input
            type='text'
            ref={input}
            onFocus={() => {
              setIconVisible(false)
            }}
            onBlur={() => {
              setIconVisible(true)
            }}
            placeholder='Cari berdasarkan topik yang ingin kalian baca'
          />
        </div>
      </div>
      <div className='search_history_header'>
        <span>Pencarian Terkini</span>
        <a>Edit</a>
      </div>
      <div className='search_history'></div>
      <div className='search_results scrollbar'></div>
    </div>
  )
}
